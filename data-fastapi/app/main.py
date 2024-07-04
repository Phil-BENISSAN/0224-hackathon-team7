import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd
import json

import langchain_community
from langchain_chroma import Chroma
from langchain_community.embeddings import SentenceTransformerEmbeddings
from langchain_core.documents import Document
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_groq import ChatGroq

from langchain_community.document_loaders.csv_loader import CSVLoader
from langchain.chains.combine_documents import create_stuff_documents_chain
from langchain.chains import create_retrieval_chain
from langchain_core.prompts import ChatPromptTemplate

from langchain_chroma import Chroma
from langchain_community.embeddings import SentenceTransformerEmbeddings


from langchain_core.runnables import RunnablePassthrough

class Item(BaseModel):
    key : str
    question : str
app = FastAPI()

#link = 'app/df_total.csv'
#data = pd.read_csv(link, encoding='UTF-8')

link = open('app/df_total.json')
data = json.load(link)

# -------------------------------------------------   CONFIGURATION CORS   ------------------------------------------------------

origins = [
    "http://localhost:8080",
    # Vous pouvez ajouter d'autres origines si nécessaire
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)



# -------  INSERER VOTRE CODE ICI -----------------

@app.get('/')
def fn_fast_api():

    return data

#@app.get("/id")

# Return the Titles with id of all conferences
#def get_id_conference():
    #d = {}
    #for i, j in zip(data['id'], data['titre']):
      #  d.update({i: j})
    #return d

@app.get("/id/{num}")
#Return info from conference id
def get_conference(num):
    return data[int(num)]

    #if int(num) in data['id']:
       # d = data[data.index == int(num)].to_dict(orient='records')
        #return d


@app.post("/chat")
async def chat(key : question):
    question1 = question
    def chat_groq(t=0, choix="llama3-70b-8192",
                  api='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'):
        return ChatGroq(temperature=t, model_name=choix, groq_api_key=api)

    model_chat = chat_groq()

    message = """
    Tu es un  assistant spécialisé dans les événements pour les entreprises dans la thèmetique de l'inclusivité. Ta responsabilité est de répondre de manière personnalisée, professionnelle et agréable.
    Les utilisateurs sont très probablement des entreprise à la recherche d'une conférence pour favoriser l'inclusion dans leurs entreprises. 
    utilise ce contexte pour repondre. si tu n'as pas de réponse dis le
    {question}

    Context:
    {context}
    """
    embeddings_model = SentenceTransformerEmbeddings(model_name="all-MiniLM-L6-v2")
    db = Chroma(persist_directory="hackathon/0224-hackathon-team7/data-fastapi/app/chroma_db", embedding_function=embeddings_model)


    retrier = db.as_retriever()
    prompt = ChatPromptTemplate.from_messages([("human", message)])
    rag_chain = {"context": retrier, "question": RunnablePassthrough()} | prompt | model_chat


    #question = input("Ask a question! ")

    r = rag_chain.invoke(question1)

    dicti = {'reponse': r.content}
    return dicti


# ---------------- FIN DE TON CODE ----------------


#_______________________________________________________________________________________________________________________


if __name__ == '__main__':
    uvicorn.run(app, port=8000, host='0.0.0.0')