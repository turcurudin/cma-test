#Program reads cma-artworks.db, creates array of JSON objects, and writes to file

import sqlite3
import json

data = [] #create an empty list

with sqlite3.connect("cma-artworks.db") as connection:
    c = connection.cursor()
    c.execute("SELECT id, accession_number, title, tombstone FROM artwork")

    rows = c.fetchall()
    for r in rows:
        art_id = r[0]
        #print(r[0], r[1], r[2], r[3])
        entry = {} #create empty dict for this entry in the db
        entry['id'] = r[0]
        entry['accession_number'] = r[1]
        entry['title'] = r[2]
        entry['tombstone'] = r[3]
        
        c.execute("SELECT id, role, description FROM creator LEFT JOIN artwork__creator ON creator.id = creator_id WHERE artwork_id = ?", (art_id,))
        creator_list = []
        creators = c.fetchall()
        for s in creators:
            creator = {'id': s[0], 'role': s[1], 'description': s[2]}
            creator_list.append(creator)
        entry['creator'] = creator_list
        
        c.execute("SELECT id, name FROM department LEFT JOIN artwork__department ON department.id = department_id WHERE artwork_id = ?", (art_id,))
        dept_list = []
        depts = c.fetchall()
        for d in depts:
            dept = {'id': d[0], 'name': d[1]}
            dept_list.append(dept)
        entry['department'] = dept_list
        data.append(entry)
    #print(json.dumps({'artwork': data}, sort_keys=False, indent=4))
    
    f = open("artwork.json", "w")
    f.write(json.dumps({'artwork': data}, sort_keys=False, indent=4))
    f.close()