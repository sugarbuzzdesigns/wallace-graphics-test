const dotenv = require("dotenv")

dotenv.config({ path: "./.env" })

const express = require("express")
const bodyParser = require("body-parser")

const app = express()
const cors = require("cors")
const pool = require("./db")
const port = process.env.PORT || 5000

//middleware
app.use(cors())
app.use(express.json())

// parse requests of content-type - application/json
app.use(bodyParser.json())

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/job", (req, res) => {
  res.json({ message: "JOB test page since I don't have the DB setup" })
})

//get a job (lol)
app.get("/job/:id", async (req, res) => {
  try {
    const { id } = req.params
    const todo = await pool.query(
      `SELECT JOB.CCMASTERID AS "JOB #", JOB.ARMASTERID AS "CUSTOMER ID", CUSTOMER.ARCUSTNAME AS "CUSTOMER NAME", 
        CUSTOMER.CUSTOMERLEGALNAME AS "LEGAL NAME", CSR.ARCSRID AS "CSR ID", CSR.ARCSRNAME AS "CSR NAME",
        CSR.ARCSREMAIL AS "CSR EMAIL", SALESPERSON.ARSALESID AS "SALES ID",SALESPERSON.ARSALESNAME AS "SALES NAME",
        SALESPERSON.AREMAIL AS "SALES EMAIL", JOB.CCDESCRIPTION AS "DESCRIPTION", JOB.CCDESCRIPTION2 AS "DESCRIPTION (CONT.)",
        JOB.CCPROMISEDATE AS "PROMISE DATE", JOB.QUANTITYORDERED AS "QUANTITY", JOBPART.CCFINALSIZEW AS "FINAL W",
        JOBPART.CCFINALSIZEH AS "FINAL H"
        FROM JOB
        JOIN CUSTOMER ON CUSTOMER.ARMASTERID = JOB.ARMASTERID
        JOIN JOBPART ON JOBPART.CCMASTERID = JOB.CCMASTERID
        JOIN CSR ON CSR.ARCSRID = JOB.ARCSRID
        JOIN SALESPERSON ON SALESPERSON.ARSALESID = JOB.ARSALESID
        WHERE JOB.CCMASTERID = $1;`,
      [id]
    )
    res.json(todo.rows[0])
  } catch (err) {
    console.error(err.message)
  }
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
