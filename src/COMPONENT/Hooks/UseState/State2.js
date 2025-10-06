import React, { useState } from 'react'

const State2 = () => {
    let [surname,setSurname]=useState("Patel")
    let [color,setCOlor]=useState("Black")
    let [car,setCar]=useState("Verna")
  return (
    <div>
      <h1>My surname is {surname} and my favourite color is {color}</h1>
      <h2>I have a {car} car.</h2>
    </div>
  )
}

export default State2
