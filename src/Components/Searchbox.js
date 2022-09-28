import React from "react";  

const Searchbox = ({ searcharea ,search2})=>{
    return(
        <div>
            <input type='search' className="pa3 ba b--green bg-lightest-blue" placeholder="Search Robots" onChange={search2}></input>
        </div>
    )
}

export default Searchbox