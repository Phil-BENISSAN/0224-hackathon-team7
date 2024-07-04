import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd
import json

app = FastAPI()

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


@app.get('/')
def fn_fast_api():

# -------  INSERER VOTRE CODE ICI -----------------
  
    df_total = pd.read_csv("app/df_total.json")
    conferences = json.loads(df_total.to_json(orient="records"))
    return conferences
# ---------------- FIN DE TON CODE ----------------


#_______________________________________________________________________________________________________________________


if __name__ == '__main__':
    uvicorn.run(app, port=8000, host='0.0.0.0')