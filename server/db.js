const Pool = require('pg').Pool

const pool = new Pool({
    user: "epace_read",
    password: "epace",
    host: "10.0.100.7",
    port: 5432,
    database: "epace"
})

module.exports = pool;