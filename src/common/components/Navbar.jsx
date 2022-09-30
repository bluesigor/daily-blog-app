import React from 'react'
import {
  AppBar,
  Button,
  Box,
  Container,
  Toolbar,
  Typography,
} from '@mui/material'
import { Link } from 'react-router-dom'

import Burger from './Burger'
import SwitchMode from './SwitchMode'
import TranslationSwitch from './TranslationSwitch'

const Navbar = () => {
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
            justifyContent: 'space-between',
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
            Daily Blog
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flex: 2,
              alignItems: 'center',
            }}
          >
            <Button
              sx={{
                display: { xs: 'none', sm: 'none', md: 'flex' },
                color: 'primary.white',
              }}
            >
              <Link
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                }}
                to="login"
              >
                <Typography
                  sx={{
                    fontWeight: 100,
                  }}
                >
                  Login
                </Typography>
              </Link>
            </Button>
            <SwitchMode />
            <TranslationSwitch />
            <Burger />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar
