import React from 'react'
import Invoice from './Invoice'
import Products from './Products'

function Main() {
  return (
    <div className='flex flex-col'>
      <Products/>
      <Invoice />
    </div>
  )
}

export default Main