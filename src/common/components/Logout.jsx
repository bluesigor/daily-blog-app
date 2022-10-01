import React from 'react'
import { GoogleLogout } from 'react-google-login'
import { useDispatch } from 'react-redux'

import { logout } from '../../store/reducers/userDataSlice'
import { CLIENT_ID } from '../../utils/api/client'
import Localizator from './Localizator'

const Logout = () => {
  const dispatch = useDispatch()

  const onSuccess = () => {
    dispatch(logout())
  }

  return (
    <GoogleLogout
      clientId={CLIENT_ID}
      onLogoutSuccess={onSuccess}
      isSignedIn={true}
      buttonText=<Localizator text="Logout" />
      size="small"
      icon={false}
    />
  )
}

export default Logout
