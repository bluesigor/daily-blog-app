import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Main from '../../pages/Main.jsx/Main'
import Login from '../../pages/Login/Login'

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="login" element={<Login />} />
    </Routes>
  )
}

export default Routing
