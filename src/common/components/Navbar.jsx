import React from 'react'
import { Link } from 'react-router-dom'
import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material'
import { useSelector } from 'react-redux'

import Burger from './Burger'
import SwitchMode from './SwitchMode'
import TranslationSwitch from './TranslationSwitch'
import Login from './Login'
import Logout from './Logout'
import Account from './Account'
import { isLoggedInSelector } from '../../store/selectors/userDataSelectors'

const Navbar = () => {
  const isLoggedIn = useSelector(isLoggedInSelector)

  return (
    <AppBar
      sx={{
        bgcolor: 'primary.main',
        height: '90px',
      }}
      position="static"
    >
      <Container
        sx={{
          px: { xs: 0, sm: 1 },
        }}
        maxWidth="xl"
      >
        <Toolbar
          disableGutters
          sx={{
            px: { xs: 1 },
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Typography
            variant="h6"
            component="h1"
            sx={{
              flex: 6,
              fontWeight: 800,
            }}
          >
            <Link
              style={{
                textDecoration: 'none',
                color: 'inherit',
              }}
              to="/"
            >
              Daily Blog
            </Link>
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flex: { xs: 0, sm: 4 },
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Box
              flex={3}
              display={{ xs: 'none', sm: 'none', md: 'flex' }}
              alignItems="center"
              flexDirection="row"
              justifyContent="space-between"
            >
              {isLoggedIn && <Account />}
              {isLoggedIn ? <Logout /> : <Login />}
            </Box>
            <Box
              ml={2}
              flex={2}
              display="flex"
              alignItems="center"
              flexDirection="row"
            >
              <SwitchMode />
              <TranslationSwitch />
            </Box>
            <Burger />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar
