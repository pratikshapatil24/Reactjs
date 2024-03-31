import React from 'react'

function Arow() {
    const myArray = ["Pratiksha","Shivaji","Patil"];
    
   const myArrayList = myArray.map((i) => <p>{i}</p>)
  return (

    myArrayList
   
  )
}

export default Arow