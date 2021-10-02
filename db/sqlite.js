const sqlite3 = require('@journeyapps/sqlcipher').verbose()

const dotenv = require('dotenv')
dotenv.config({ path: '.env' })

const db = new sqlite3.Database(`./db/${process.env.DB_NAME}.db`)

db.serialize(() => {
    // Decryption
    db.run('PRAGMA cipher_compatibility = 3')
    db.run(`PRAGMA key = ${process.env.DB_PASS}`)

    // Migrations

    db.run(
        `CREATE TABLE IF NOT EXISTS peoples(
      id INTEGER PRIMARY KEY, 
      first_name TEXT NOT NULL, 
      last_name TEXT NOT NULL, 
      email TEXT NOT NULL UNIQUE, 
      phone TEXT NOT NULL UNIQUE)`,
    )

    // Seeding

    db.run(
        `INSERT OR IGNORE INTO peoples VALUES
    (1, 'Brad', 'Pitt', 'justsomedude@atom.com', '666-999-9999'),
    (2, 'Jennifer', 'Lopez', 'regulargal@bored.org', '888-999-9595')`,
    )
})

module.exports = db
