"""SEAMLESS Webinar — Python Backend"""
import json
import psycopg2
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Optional

app = FastAPI(title="SEAMLESS Webinar API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

DB_CONFIG = {
    "host": "127.0.0.1",
    "port": "5432",
    "user": "nextcloud",
    "password": "nextcloud_pass",
    "dbname": "webinar",
}

def get_db():
    """Get a new cursor."""
    return psycopg2.connect(**DB_CONFIG)

class Survey(BaseModel):
    lang: Optional[str] = "unknown"
    name: str
    region: str
    dancer: str
    why: str
    closer_to: str
    wants: list[str] = []
    contact_type: Optional[str] = ""
    contact: str
    timestamp: Optional[str] = None

class Registration(BaseModel):
    name: str
    email: str
    contact: Optional[str] = ""
    timestamp: Optional[str] = None

@app.get("/")
def root():
    return {"status": "ok", "app": "seamless-webinar"}

@app.post("/api/survey")
def submit_survey(s: Survey):
    try:
        conn = get_db()
        cur = conn.cursor()
        cur.execute("""
            INSERT INTO surveys (lang, name, region, dancer, why, closer_to, wants, contact_type, contact)
            VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s)
        """, (s.lang, s.name, s.region, s.dancer, s.why, s.closer_to, s.wants, s.contact_type, s.contact))
        conn.commit()
        cur.close()
        conn.close()
        return {"status": "ok", "id": cur.fetchone()}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/api/register")
def submit_registration(r: Registration):
    try:
        conn = get_db()
        cur = conn.cursor()
        cur.execute("""
            INSERT INTO registrations (name, email, contact)
            VALUES (%s, %s, %s)
        """, (r.name, r.email, r.contact))
        conn.commit()
        cur.close()
        conn.close()
        return {"status": "ok"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
