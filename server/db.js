const {Pool} = require("pg")



const db = new Pool({
    host: "localhost",
    user: "postgres",
    password: "109109109",
    port: 5432,
    database: "kanalservice"
})


db.connect()


module.exports = db