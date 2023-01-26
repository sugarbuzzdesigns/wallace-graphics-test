import React, {useState, useEffect} from "react"

const {value, setValue} = useState("")

useEffect(() => {
    if(value.length > 0) {
        fetch(`https://localhost:5000/job/${value}`).then(
            //I don't know how to get the data from the response
            responseData => {
                let searchQuery = value
                for(const key in responseData) {
                    if(responseData[key].includes(searchQuery)) {
                        console.log(responseData[key])
                    }
                }
            }
        )
    }
}, {value})

function Search() {
  return (
    <div>
      <h1 className="titleText">Search</h1>
      <input type="text" className="searchBar" placeholder="Search..." 
      onChange = {(event) => setValue(event.target.value)}
      value = {value}/>
    </div>
  )
}

export default Search