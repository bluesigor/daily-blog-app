import React from 'react'
import { Outlet } from 'react-router-dom'
import { ThemeProvider } from '@mui/material'

import useSwitchMode from '../hooks/useSwitchMode'
import Layout from '../../assets/Routes/Layout'
import Routing from '../../assets/Routes/Routing'

const Provider = () => {
  const { theme } = useSwitchMode()

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Routing />
        <Outlet />
      </Layout>
    </ThemeProvider>
  )
}

export default Provider
