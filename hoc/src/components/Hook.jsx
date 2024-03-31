import React, { useState } from 'react'

const Hook = () => {
    const [myName, setMyName] = useState(" Er.Pratiksha")
    const ChangeName = () =>{
        let val=myName;
        val==="Er.Pratiksha Shivaji Patil" ? setMyName("Er.Pratiksha "): setMyName("Er.Pratiksha Shivaji Patil")
        // if (val==="Pratiksha Shivaji Patil") {
        //     setMyName("Pratiksha ")
            
        // }else{
        //     setMyName("Pratiksha Shivaji Patil")
        // }
        
        
    }

  return (
    <div>
      <h1>{myName}</h1>
      <button onClick={ChangeName}>click me</button>
    </div>
  )
}

export default Hook
