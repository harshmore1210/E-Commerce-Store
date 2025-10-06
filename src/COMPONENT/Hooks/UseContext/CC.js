import React, { useContext } from 'react'
import DEMO from './Context'

const CC = () => {
  let {color,car}=useContext(DEMO)
  return (
    <div>
      

      <h1>My fav color is {color} and i love {car} car.</h1>
    </div>
  )
}

export default CC
