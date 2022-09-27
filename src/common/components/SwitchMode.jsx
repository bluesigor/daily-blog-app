import React from 'react'
import { DarkMode, LightMode } from '@mui/icons-material'
import { IconButton } from '@mui/material'

import useSwitchMode from '../../utils/hooks/useSwitchMode'
import { useSelector } from 'react-redux'

const SwitchMode = () => {
  const { handleMode } = useSwitchMode()
  const userTheme = useSelector((state) => state.userSettings.theme)

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
