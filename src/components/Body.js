import React from 'react'
import Sidebar from './Sidebar'
//import Main from './Main'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div className='flex mb-2 '>
        <Sidebar /> 
        <Outlet/>
    </div>
  )
}

export default Body