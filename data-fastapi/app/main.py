import uvicorn
from fastapi import FastAPI, Request, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd
import json
from pydantic import BaseModel
from typing import Dict

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


app = FastAPI()

class Question(BaseModel):
    question: str

# Charge les données JSON
try:
    with open('app/df_total.json', 'r', encoding='UTF-8') as file:
        data = json.load(file)
except Exception as e:
    data = []
    print(f"Erreur lors du chargement du fichier JSON: {e}")

# -------------------------------------------------   CONFIGURATION CORS   ------------------------------------------------------
origins = [
    "http://localhost:8080",
    "http://localhost:8000",
    "*",  # À utiliser pour le débogage, restreindre pour la production
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get('/')
def fn_fast_api():
    return data

@app.get("/id/{num}")
#Return info from conference id
def get_conference(num: int):
    try:
        return data[num]
    except IndexError:
        raise HTTPException(status_code=404, detail="ID non trouvé")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

def chat_groq(t=0, choix="llama3-70b-8192",
              api='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'):
    return ChatGroq(temperature=t, model_name=choix, groq_api_key=api)

@app.post("/chat")
async def chat(question: Question) -> Dict[str, str]:
    # print('Received message:', question.question)

    try:
        model_chat = chat_groq()

        message = """
        Tu es un assistant spécialisé dans les événements pour les entreprises dans la thématique de l'inclusivité. Ta responsabilité est de répondre de manière personnalisée, professionnelle et agréable.
        Les utilisateurs sont très probablement des entreprises à la recherche d'une conférence pour favoriser l'inclusion dans leurs entreprises.
        Utilise ce contexte pour répondre. Si tu n'as pas de réponse, dis-le.
        {question}

        Contexte:
        {context}
        """

        embeddings_model = SentenceTransformerEmbeddings(model_name="all-MiniLM-L6-v2")
        db = Chroma(persist_directory="hackathon/0224-hackathon-team7/data-fastapi/app/chroma_db", embedding_function=embeddings_model)
        retriever = db.as_retriever()

        prompt = ChatPromptTemplate.from_messages([("human", message)])
        rag_chain = {"context": retriever, "question": RunnablePassthrough()} | prompt | model_chat

        r = rag_chain.invoke(question.question)

        return {'reply': r.content}

    except Exception as e:
        print(f"Erreur lors du traitement de la demande: {e}")
        raise HTTPException(status_code=500, detail="Erreur interne du serveur")

if __name__ == '__main__':
    uvicorn.run(app, port=8000, host='0.0.0.0')
