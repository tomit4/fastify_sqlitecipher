const sqlite3 = require('@journeyapps/sqlcipher').verbose()

let db = new sqlite3.Database('./test.db')

db.serialize(() => {
    db.run('PRAGMA cipher_compatibility = 3')
    db.run('PRAGMA key = "mysecret"')

    db.run(
        `CREATE TABLE IF NOT EXISTS peoples(
      id INTEGER PRIMARY KEY, 
      first_name TEXT NOT NULL, 
      last_name TEXT NOT NULL, 
      email TEXT NOT NULL UNIQUE, 
      phone TEXT NOT NULL UNIQUE)`,
    )

    db.run(
        `INSERT OR IGNORE INTO peoples VALUES
    (1, 'Brad', 'Pitt', 'justsomedude@atom.com', '666-999-9999'),
    (2, 'Jennifer', 'Lopez', 'regulargal@bored.org', '888-999-9595')`,
    )
})

module.exports = db
