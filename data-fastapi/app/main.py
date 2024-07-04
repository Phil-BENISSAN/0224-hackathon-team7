import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd
import json
from pydantic import BaseModel
app = FastAPI()

class Item(BaseModel):
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
def chat(key:Item):
    return question



# ---------------- FIN DE TON CODE ----------------


#_______________________________________________________________________________________________________________________


if __name__ == '__main__':
    uvicorn.run(app, port=8000, host='0.0.0.0')