const dotenv = require("dotenv")
const Pool = require("pg").Pool

dotenv.config({ path: "./.env" })

const pool = new Pool({
  user: process.env.DATABASE_USER || "epace_read",
  password: process.env.DATABASE_PASSWORD || "?",
  host: process.env.DATABASE_HOST || "10.0.100.7",
  port: 5432,
  database: process.env.DATABASE_NAME || "epace",
})

module.exports = pool
