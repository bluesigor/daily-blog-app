import { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createTheme } from '@mui/material/styles'

import { setMode } from '../../store/reducers/userSettingsSlice'
import { userThemeSelector } from '../../store/selectors/userSettingsSelectors'

const useSwitchMode = () => {
  const dispatch = useDispatch()
  const userTheme = useSelector(userThemeSelector)

  const theme = createTheme({
    palette: {
      mode: userTheme,
      primary:
        userTheme === 'light'
          ? {
              light: '#66B1A8',
              main: '#02A28F',
              white: '#ffff',
              text: '#02A28F',
              theme: '#555555',
            }
          : {
              light: '#66B1A8',
              main: '#111',
              white: '#02A28F',
              text: '#ffff',
              theme: '#F4EA56',
            },
    },
  })

  const handleMode = useCallback(() => {
    if (userTheme === 'dark') {
      dispatch(setMode('light'))
    }
    if (userTheme === 'light') {
      dispatch(setMode('dark'))
    }
  }, [dispatch, userTheme])

  return { theme, handleMode }
}

export default useSwitchMode
