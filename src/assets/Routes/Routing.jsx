import React from 'react'
import { Route, Routes } from 'react-router-dom'
import RequireAuth from '../../common/components/RequireAuth'
import Fallback from '../../pages/Fallback/Fallback'

import Main from '../../pages/Main.jsx/Main'
import Profile from '../../pages/Profile/Profile'

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route element={<RequireAuth />}>
        <Route path="/profile/:name" element={<Profile />} />
      </Route>
      <Route path="*" element={<Fallback />} />
    </Routes>
  )
}

export default Routing
