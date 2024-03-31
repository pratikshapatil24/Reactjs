import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title=`Chats (${count})`

    })
    let increment= () =>{
        setCount(count+1)
    }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>click me</button>
    </div>
  )
}

export default UseEffect
