import React from 'react'
import {FaLevelDownAlt,FaLevelUpAlt} from 'react-icons/fa'

const UpDowntrend = (value) => {
  return (
    <>
    {value < 0 ? <FaLevelDownAlt className='inline text-red-800'/> : <FaLevelUpAlt className='inline text-green-500'/> }
   </>
  )
}

export default UpDowntrend;