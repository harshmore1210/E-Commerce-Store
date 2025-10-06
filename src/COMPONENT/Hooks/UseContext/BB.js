import React, { useContext } from 'react'
import CC from './CC'
import DEMO from './Context'

const BB = () => {

  let {car}=useContext(DEMO)
  return (
    <div>
      <CC/>
      i LOVE {car}
    </div>
  )
}

export default BB
