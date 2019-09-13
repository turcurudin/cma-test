#Program reads cma-artworks.db, creates array of JSON objects, and writes to file

import sqlite3

with sqlite3.connect("cma-artworks.db") as connection:
    c = connection.cursor()
    c.execute("SELECT id, title FROM artwork")
    for row in c.fetchall():
        print(row)
        