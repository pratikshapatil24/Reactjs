import React, { useState } from 'react'

function Form() {
    const [name, setName] = useState("");

    const handleChange =(event) =>{
        // const name = event.target.name;
        const value = event.target.value;
    }
    const OnSubmit= (event) => {
        event.preventDefault();
    alert(`The name you entered was: ${name}`)
    }
  return (
  <form action="" onSubmit={OnSubmit}>
    <label htmlFor="">Enter your name: 
         <input type="text" value={name}
         onChange={(e) => setName(e.target.value)}/>
         <input type="number" name='age' value={name.age|| ""}
         onChange={handleChange} />
    </label>
    <input type="submit" />
  </form>
  )
}

export default Form