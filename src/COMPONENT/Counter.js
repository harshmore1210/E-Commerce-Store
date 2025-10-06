import React, { useState } from 'react'

const Counter = () => {

    let [count,setCount]=useState(10)

    let ADD=()=>{
     setCount(count+1)
    }


    let MINUS=()=>{
    if(count>10){
        setCount(count-1)
    }
    }
  return (
    <div>
      <button onClick={ADD}>+</button>
      <h1>{count}</h1>
      <button onClick={MINUS}>-</button>
    </div>
  )
}

export default Counter
