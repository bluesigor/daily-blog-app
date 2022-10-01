import { useCallback, useEffect } from 'react'
import { gapi } from 'gapi-script'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { setUserData } from '../../store/reducers/userDataSlice'
import { CLIENT_ID } from '../api/client'

const useAuth = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: CLIENT_ID,
        scope: 'https://www.googleapis.com/auth/blogger',
      })
    }

    gapi.load('client:auth2', start)
  }, [dispatch])

  const onSuccess = useCallback(
    (res) => {
      dispatch(
        setUserData({
          isLoggedIn: true,
          token: res.access_token,
          user: {
            name: res.profileObj.name,
            img: res.profileObj.imageUrl,
          },
        }),
      )
    },
    [dispatch],
  )

  const onFailure = () => {
    navigate('*')
  }

  return { onSuccess, onFailure }
}

export default useAuth
