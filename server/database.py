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
    except Exception as error:
        traceback.print_exc()
        print(error)        
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

    except Exception as error:
        traceback.print_exc()
        print(error)

    except Error as error:
        traceback.print_exc()
        print(error)

    finally:
        if conn:
            conn.close()

    return data, columns

def get_user_tags(tid):
    conn, data, columns = None, None, None

    with open("DATABASE.md","r") as file:
        db = file.read().strip()

    try:
        conn = sqlite3.connect(db)
        c = conn.cursor()
        c.execute(f'SELECT * FROM user_tag WHERE user_id="{tid}"')
        data = c.fetchall()
        columns = list(map(lambda x: x[0], c.description))
        conn.commit()

    except Exception as error:
        traceback.print_exc()
        print(error)

    except Error as error:
        traceback.print_exc()
        print(error)

    finally:
        if conn:
            conn.close()

    return data, columns


def get_tag_names(tag_ids):
    conn, data, columns = None, None, None

    with open("DATABASE.md","r") as file:
        db = file.read().strip()

    try:
        is_first = True
        condition = str()
        for tid in list(tag_ids):
            if is_first:
                condition = condition + "id IN (\"" + str(tid) + "\" "
                is_first = False
            else:
                condition = condition + ",\"" + str(tid) + "\" "
        condition = condition + ")"                

        conn = sqlite3.connect(db)
        c = conn.cursor()
        c.execute(f'SELECT * FROM tag WHERE {condition}')
        data = c.fetchall()
        columns = list(map(lambda x: x[0], c.description))
        conn.commit()

    except Exception as error:
        traceback.print_exc()
        print(error)

    except Error as error:
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

    except Exception as error:
        print('error xd')
        traceback.print_exc()
        print(error)
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
            values = values + "\"" + str(dic[key]) + "\""
            is_first = False
        else:
            columns = columns + ",\"" + key + "\""
            values = values + ",\"" + str(dic[key]) + "\""

    try:
        db_exec(db, f'INSERT INTO {table} ({columns}) VALUES ({values})')

        is_first = True
        condition = str()
        for key in dic.keys():
            if is_first:
                condition = condition + key + "=\"" + str(dic[key]) + "\" "
                is_first = False
            else:
                condition = condition + "AND " + key + "=\"" + str(dic[key]) + "\" "

        conn = sqlite3.connect(db)
        c = conn.cursor()
        c.execute(f'SELECT * FROM {table} WHERE {condition}')
        data = c.fetchone()
        columns = list(map(lambda x: x[0], c.description))
        conn.commit()        
        return data[0]

    except Error as e:
        traceback.print_exc()
        print(e)

    except Exception as e:
        traceback.print_exc()
        print(e)        
    
    return -1
