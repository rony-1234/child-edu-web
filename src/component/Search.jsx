import { useState } from "react";


const Search = ({setResult}) => {
    const [input,SetInput] = useState("")

    const searchData = (value) =>{
      fetch('http://localhost:4000/services')
      .then(res => res.json)
      .then(data =>{
         const result = data.filter((user) =>{
          return (
            value && user && user.name && user.name.toLowercase().includes(value)
          )
         })
         setResult(result)
      })

    }
    const searchForm = (value) =>{
        SetInput(value);
        searchData(value);
    }

 
    return (
      <div>
        <div className="form-control">
        <div className="input-group">
          <input onChange={(e) =>searchForm(e.target.value)} type="text" name="search" placeholder="Search…"  className="input input-bordered" />
          <button className="btn btn-square">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </button>
        </div>
      </div>
      </div>
    );
};

export default Search;