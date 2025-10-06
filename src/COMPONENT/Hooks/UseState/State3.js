import React, { useState } from 'react'

const State3 = () => {
    let [name,setName]=useState("Zalak")

let FUNCTION=()=>{
   setName("Vidhi")
}

  return (
    <div>
      <h1>My name is {name}.</h1>

      <button onClick={FUNCTION}>CLICKME</button>



    </div>
  )
}

export default State3
