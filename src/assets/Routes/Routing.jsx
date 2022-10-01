import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Fallback from '../../pages/Fallback/Fallback'

import Main from '../../pages/Main.jsx/Main'
import Profile from '../../pages/Profile/Profile'

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/profile/:name" element={<Profile />} />
      <Route path="*" element={<Fallback />} />
    </Routes>
  )
}

export default Routing
