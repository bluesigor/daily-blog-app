import { ThemeProvider } from '@mui/material'
import { BrowserRouter, Outlet } from 'react-router-dom'

import './App.css'
import Routing from './assets/Routes/Routing'
import Layout from './assets/Routes/Layout'

import useSwitchMode from './utils/hooks/useSwitchMode'

function App() {
  const { theme } = useSwitchMode()

  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Layout>
            <Routing />
            <Outlet />
          </Layout>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
