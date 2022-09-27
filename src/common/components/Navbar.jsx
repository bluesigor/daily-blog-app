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

const Navbar = () => {
  return (
    <AppBar
      sx={{
        bgcolor: 'primary.main',
        height: '90px',
      }}
      position="static"
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography
            variant="h6"
            component="h1"
            sx={{
              fontWeight: 800,
            }}
          >
            Daily Blog
          </Typography>
          <Box
            sx={{
              display: 'flex',
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
            <Burger />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar
