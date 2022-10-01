import React from 'react'
import { DarkMode, LightMode } from '@mui/icons-material'
import { IconButton } from '@mui/material'

import useSwitchMode from '../../utils/hooks/useSwitchMode'
import { useSelector } from 'react-redux'
import { userThemeSelector } from '../../store/selectors/userSettingsSelectors'

const SwitchMode = () => {
  const { handleMode } = useSwitchMode()
  const userTheme = useSelector(userThemeSelector)

  return (
    <IconButton
      sx={{
        color: 'primary.theme',
      }}
      aria-label="Switch"
      onClick={handleMode}
    >
      {userTheme === 'light' ? <DarkMode /> : <LightMode />}
    </IconButton>
  )
}

export default SwitchMode
