import React, { useContext } from 'react'
import BB from './BB'
import DEMO from './Context'

const AA = () => {
  let {color}=useContext(DEMO)
  return (
    <div>
      <BB/>


      {color}
    </div>
  )
}

export default AA
