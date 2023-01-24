import React, { Fragment, useEffect, useState } from "react";

const ListJob = () => {
  const [job, setJob] = useState({});

  const getJob = async () => {
    try {
      const response = await fetch("http://localhost:5000/job/160876");
      const jsonData = await response.json();

      setJob(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getJob();
  }, []);


  return (
    <Fragment>
      <div><input type={"text"} placeholder={"Search"}></input></div>
      <h1 className="text-center mt-5">Job List</h1>
      {" "}
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
    <button>EDIT</button> <br></br><br></br>
    <button>DELETE</button>
    </Fragment>
  );
};

export default ListJob;
