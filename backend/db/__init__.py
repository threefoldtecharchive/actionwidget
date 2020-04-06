import sqlite3
import db

db_file = 'mount/calltoaction.db'

def get_db():
    db_api = sqlite3.connect(db_file)
    
    return db_api


def init():
   

    sql_user_entries = """ CREATE TABLE IF NOT EXISTS users (
                                    id INTEGER PRIMARY KEY,
                                    email_address text NOT NULL,
                                    name text NOT NULL,
                                    double_name text NULL,
                                    internet_capacity integer NOT NULL,
                                    deploy_solutions integer NOT NULL
                                ); """



    try:
        c = sqlite3.connect(db_file)
        c.execute(sql_user_entries)
        c.commit()
        print("db initialized")
    except Exception as e:
        print(e)