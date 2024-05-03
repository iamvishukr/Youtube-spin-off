import React from 'react'
import Sidebar from './Sidebar'
import Main from './Main'

const Body = () => {
  return (
    <div className='flex justify-between m-8'>
        <Sidebar />
        <Main />
    </div>
  )
}

export default Body