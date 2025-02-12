import React from "react";

const Filter = ({ findName, setFindName }) => {
    const handleNameFind = (event) => {
        setFindName(event.target.value)
    }
    
    return (
        <p>filter shown with <input value={findName} onChange={handleNameFind} /></p>
    )
}

export default Filter