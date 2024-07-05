import uvicorn
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd
import json
from pydantic import BaseModel

import langchain_community
from langchain_community.document_loaders.csv_loader import CSVLoader
from langchain.chains.combine_documents import create_stuff_documents_chain
from langchain.chains import create_retrieval_chain
from langchain_core.prompts import ChatPromptTemplate

from langchain_chroma import Chroma
from langchain_community.embeddings import SentenceTransformerEmbeddings
from langchain_core.documents import Document
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_groq import ChatGroq
from langchain_core.runnables import RunnablePassthrough
from typing import Dict



app = FastAPI()

class Question(BaseModel):
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



@app.get("/id/{num}")
#Return info from conference id
def get_conference(num):
    return data[int(num)]



def chat_groq(t=0, choix="llama3-70b-8192",
              api='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'):
    return ChatGroq(temperature=t, model_name=choix, groq_api_key=api)



@app.post("/chat")
async def chat(question: Question) -> Dict[str, str]:
    # print('Received message:', question.question)

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

    r = rag_chain.invoke(question)

    return {'reply': r.content}

# ---------------- FIN DE TON CODE ----------------


#_______________________________________________________________________________________________________________________


if __name__ == '__main__':
    uvicorn.run(app, port=8000, host='0.0.0.0')