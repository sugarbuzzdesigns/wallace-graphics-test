import "./App.css"
import React, { Fragment } from "react"
import { ListJob } from "./components/ListJob"

function App() {
  return (
    <Fragment>
      <div className="container">
        <ListJob />
      </div>
    </Fragment>
  )
}

export default App
