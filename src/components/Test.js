import React, { useState } from 'react'

const Test = () => {
    const { name , handleChange} = User();
  return (
    <>
    <div>{name}</div>
    <input type="text" onChange={(e) => handleChange(e.target.value)} />
  
    </>)
}


function User() {
    const [name,SetName] = useState("Rafi")

    const handleChange = (key) => {
     SetName(key);
    }
  return { name, handleChange}
}

export default Test