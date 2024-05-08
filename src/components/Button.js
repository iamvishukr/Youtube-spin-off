import React from 'react'

const Button = ({name}) => {
  return (
    <div className=''>
        <button className='border-gray-600 bg-slate-800 text-white rounded-lg w-full  px-1 py-1 m-4'>{name}</button>
    </div>
  )
}

export default Button