# instalation à faire avant de lancer la fonction :

# !pip install langchain
# !pip install langchain-community
# !pip install sentence-transformers faiss-cpu
# !pip install langchain_chroma
# !pip install langchain-groq

def prepa_chatbot():
    import pandas as pd
    from langchain_chroma import Chroma
    from langchain_community.embeddings import SentenceTransformerEmbeddings
    from langchain_core.documents import Document
    from langchain.text_splitter import RecursiveCharacterTextSplitter
    from langchain_groq import ChatGroq
    import warnings
    warnings.filterwarnings("ignore")
    
    data = pd.read_csv(r'C:\Documents\Wild code school\Python\hackathon\0224-hackathon-team7\data-fastapi\app\df_total.csv')
    print("1")
    documents = []


    for i, r in data.iterrows():
        meta = {col: r[col] for col in ['id','titre','descriptif','intervenant','langue','duree_conf','duree_total','theme','mobilite','type']}
        page = f"{r['descriptif']} \n\n{r['descriptif']}"
        doc = Document(
            page_content=page,
            metadata=meta,
        )
        documents.append(doc)
    print("2")
    text_splitter = RecursiveCharacterTextSplitter(

        chunk_size=1000,
        chunk_overlap=100,
        length_function=len,
        is_separator_regex=False,
    )

    docs = text_splitter.split_documents(documents)

    embeddings_model = SentenceTransformerEmbeddings(model_name="all-MiniLM-L6-v2")
    print("3")
    # def batch_documents(documents, batch_size):
    #     for i in range(0, len(documents), batch_size):
    #         yield documents[i:i + batch_size]

    # for batch in batch_documents(docs, 5461):
    #     Chroma.from_documents(documents=batch, embedding=embeddings_model, persist_directory="./chroma_db")

    Chroma.from_documents(docs, embeddings_model, persist_directory="hackathon/0224-hackathon-team7/data-fastapi/app/chroma_db")

    print("4")
    return

prepa_chatbot()
