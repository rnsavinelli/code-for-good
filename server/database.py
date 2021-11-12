import sqlite3
import traceback
from sqlite3 import Error
import random

def db_exec(db, query):
    conn = None
    try:
        conn = sqlite3.connect(db)
        c = conn.cursor()
        c.execute(query)
        conn.commit()
    except Error as e:
        traceback.print_exc()
        print(e)
    finally:
        if conn:
            conn.close()

def get_table(table):
    conn, data, columns = None, None, None

    with open("DATABASE.md","r") as file:
        db = file.read().strip()

    try:
        conn = sqlite3.connect(db)
        c = conn.cursor()
        c.execute(f'SELECT * FROM {table}')
        data = c.fetchall()
        columns = list(map(lambda x: x[0], c.description))
        conn.commit()

    except Error as errpr:
        traceback.print_exc()
        print(error)

    finally:
        if conn:
            conn.close()

    return data, columns

def get_user_by_credentials(table, username, password):
    conn, data, columns = None, None, None

    with open("DATABASE.md","r") as file:
        db = file.read().strip()

    try:
        conn = sqlite3.connect(db)
        c = conn.cursor()
        c.execute(f'SELECT * FROM {table} WHERE username="{username}" AND password="{password}"')
        data = c.fetchone()
        if data != None:
            c.execute(f'SELECT * FROM user WHERE id="{data[1]}"')
            data2 = c.fetchone()
            columns = list(map(lambda x: x[0], c.description))
            conn.commit()
        else: 
            return None, None

    except Error as error:
        print('error xd')
        traceback.print_exc()
        print(error)
        return None, None

    finally:
        if conn:
            conn.close()

    return data2, columns

def write_table(table, dic):

    with open("DATABASE.md","r") as file:
        db = file.read().strip()

    is_first = True
    values, columns = str(), str()
    for key in dic.keys():
        if is_first:
            columns = columns + "\"" + key + "\""
            values = values + "\"" + dic[key] + "\""
            is_first = False
        else:
            columns = columns + ",\"" + key + "\""
            values = values + ",\"" + dic[key] + "\""

    try:
        db_exec(db, f'INSERT INTO {table} ({columns}) VALUES ({values})')
        pass
    except Error as e:
        traceback.print_exc()
        print(e)
