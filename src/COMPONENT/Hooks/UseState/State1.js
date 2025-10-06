import React, { useState } from 'react'

const State1 = () => {

    let [name,setName]=useState("RRR")
  return (
    <div>
<h1>My name is {name}</h1>
    </div>
  )
}

export default State1
