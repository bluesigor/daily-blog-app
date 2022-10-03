import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { isLoggedInSelector } from '../../store/selectors/userDataSelectors'

const RequireAuth = () => {
  const isLoggedIn = useSelector(isLoggedInSelector)
  const location = useLocation()

  if (!isLoggedIn) {
    return <Navigate to="/" state={{ from: location }} />
  }

  return <Outlet />
}

export default RequireAuth
