import React from 'react'
import loader from './loading.gif'

const Spinner = () => {
  return (
    <div className="text-center">
      <img src={loader} alt="Loading" style={{ height: '30px' }} />
    </div>
  )
}

export default Spinner
