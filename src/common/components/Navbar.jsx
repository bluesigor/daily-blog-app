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
    <AppBar bgcolor="primary.main" height="90px" position="static">
      <Container px={{ xs: 0, sm: 1 }} maxWidth="xl">
        <Toolbar
          disableGutters
          px={{ xs: 1 }}
          display="flex"
          alignitems="center"
        >
          <Typography
            display={{ xs: 'none', sm: 'block', md: 'block' }}
            variant="h6"
            component="h1"
            flex={6}
            fontWeight={800}
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
            display="flex"
            flex={{ xs: 1, sm: 4 }}
            justifyContent="space-between"
            alignItems="center"
          >
            <Box
              flex={4}
              display="flex"
              alignItems="center"
              flexDirection="row"
              justifyContent="space-between"
            >
              <Box display={{ xs: 'none', sm: 'none', md: 'block' }}></Box>
              <Box display={{ xs: 'none', sm: 'none', md: 'block' }}>
                {isLoggedIn ? <Logout /> : <Login />}
              </Box>

              {isLoggedIn && <Account />}
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
