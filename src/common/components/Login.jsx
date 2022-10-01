import React from 'react'
import GoogleLogin from 'react-google-login'

import { CLIENT_ID } from '../../utils/api/client'
import Localizator from './Localizator'
import useAuth from '../../utils/hooks/useAuth'

const Login = () => {
  const { onSuccess, onFailure } = useAuth()

  return (
    <GoogleLogin
      clientId={CLIENT_ID}
      buttonText=<Localizator text="Login" />
      onSuccess={onSuccess}
      theme="light"
      isSignedIn={true}
      size="small"
      icon={false}
      onFailure={onFailure}
      cookiePolicy={'single_host_origin'}
    />
  )
}

export default Login
