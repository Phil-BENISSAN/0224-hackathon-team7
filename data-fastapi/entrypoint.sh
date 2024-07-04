#!/bin/sh

# Démarrer l'application FastAPI avec uvicorn en mode rechargement
exec uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload