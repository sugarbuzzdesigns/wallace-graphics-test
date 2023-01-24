import React, { Fragment, useEffect, useState } from "react";

const ListJob = () => {
  const [job, setJob] = useState([]);

  const getJob = async () => {
    try {
      const response = await fetch("http://localhost:5000/job/ANTHONY");
      const jsonData = await response.json();

      setJob(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getJob();
  }, []);

  console.log(job);

  return (
    <Fragment>
      {" "}
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {/*<tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
          </tr> */}
          {job.map(todo => (
            <tr>
              <td>{todo.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListJob;
