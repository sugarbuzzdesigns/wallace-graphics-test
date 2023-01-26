import React, { Fragment, useEffect, useState } from "react"

const ListJob = () => {
  const [job, setJob] = useState({})
  const [jobId, setJobId] = useState("")

  const getJob = async (id) => {
    try {
      // using a mock api
      const response = await fetch(
        `https://63d1a769d5f0fa7fbdcef916.mockapi.io/job/${id}`
      )
      const jsonData = await response.json()

      // only doing this because I'm using mocapi.io
      // and the data shape doesn't doesn't match wallcegraphics data
      const transformedData = {
        "CSR EMAIL": "",
        "CSR ID": jsonData.csrId,
        "CSR NAME": jsonData.customerName,
        "CUSTOMER ID": jsonData.customerId,
        "CUSTOMER NAME": jsonData.customerName,
        DESCRIPTION: jsonData.description,
        "DESCRIPTION (CONT.)": jsonData.descriptionCont,
        "FINAL H": 30,
        "FINAL W": 20,
        "JOB #": id,
        "LEGAL NAME": jsonData.legalName,
        "PROMISE DATE": "2024-01-31T05:00:00.000Z",
        QUANTITY: 238,
        "SALES EMAIL": null,
        "SALES ID": 1,
        "SALES NAME": "House",
      }

      setJob(transformedData)
      console.log(job)
    } catch (err) {
      console.error(err.message)
    }
  }

  // we don't need this anymore since
  // we are going to simply load a blank table first
  // then make the API call on submit
  // useEffect(() => {
  //   getJob()
  // }, [jobId])

  return (
    <Fragment>
      {/* adding some very simple styling. 
      We can use a CSS framework or an external style sheet later */}
      <div style={{ marginTop: "50px" }}>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            // get the job id from the input
            const id = e.target.elements["jobId"].value
            // send the id to the getJob fn which will make the API call
            // and populate our data
            getJob(id)
          }}
        >
          <input name="jobId" type="text" placeholder="Search"></input>
          <input type="submit" />
        </form>
      </div>
      <h1 className="text-center mt-5">Job List</h1>
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>Job #</th>
            <th>Customer ID</th>
            <th>Customer Name</th>
            <th>Legal Name</th>
            <th>CSR ID</th>
            <th>CSR Name</th>
            <th>CSR Email</th>
            <th>Sales ID</th>
            <th>Sales Name</th>
            <th>Sales Email</th>
            <th>Description</th>
            <th>Description (Cont.)</th>
            <th>Promise Date</th>
            <th>Quantity</th>
            <th>Final W</th>
            <th>Final H</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{job["JOB #"]}</td>
            <td>{job["CUSTOMER ID"]}</td>
            <td>{job["CUSTOMER NAME"]}</td>
            <td>{job["LEGAL NAME"]}</td>
            <td>{job["CSR ID"]}</td>
            <td>{job["CSR NAME"]}</td>
            <td>{job["CSR EMAIL"]}</td>
            <td>{job["SALES ID"]}</td>
            <td>{job["SALES NAME"]}</td>
            <td>{job["SALES EMAIL"]}</td>
            <td>{job["DESCRIPTION"]}</td>
            <td>{job["DESCRIPTION (CONT.)"]}</td>
            <td>{job["PROMISE DATE"]}</td>
            <td>{job["QUANTITY"]}</td>
            <td>{job["FINAL W"]}</td>
            <td>{job["FINAL H"]}</td>
          </tr>
        </tbody>
      </table>
    </Fragment>
  )
}

export { ListJob }
