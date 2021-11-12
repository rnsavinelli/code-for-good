import sqlite3
import traceback
from sqlite3 import Error

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
