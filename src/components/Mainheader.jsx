import React from 'react'
import {Outlet} from 'react-router-dom'
const Mainheader = () => {
  return (
    <div style={{ minHeight: '80vh', padding: '20px' }}>
      <Outlet/>
    </div>
  )
}

export default Mainheader
