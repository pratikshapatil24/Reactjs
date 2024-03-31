import React, { useEffect, useRef, useState } from 'react'

const UseRef = () => {
    const[inputValue, setInputValue]=useState("")
    const count=useRef(0);

    useEffect(() => {
        count.current = count.current+2;
    });


  return (
   <>
   <input type="text" value={inputValue} 
   onChange={(e) =>setInputValue(e.target.value)}/>
   <h1>Render Count :{count.current}</h1>
   </>
  )
}

export default UseRef
