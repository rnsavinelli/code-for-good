import sqlite3
import traceback
from sqlite3 import Error

def dbload(db, table):
    conn, data = None, None
    try:
        conn = sqlite3.connect(db)
        c = conn.cursor()
        c.execute(f'SELECT * FROM {table}')
        data = c.fetchone()
        conn.commit()
    except Error as e:
        traceback.print_exc()
        print(e)
    finally:
        if conn:
            conn.close()

    config = {}
    if table == conf_table:
        config = {
            'IMAGES_DIRECTORY': data[0],
            'INFORMATION_DIRECTORY': data[1]
        }

    return config
