import React from 'react'
import loading from '../assets/loading.gif'

export const Spinner = () => {
  return (
    <div className=' flex flex-col w-20 h-20'>
      <img src={loading} className='w-50 h-50'></img>
      <p>LOADING...</p>
    </div>
  )
}
