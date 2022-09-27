import React from 'react'
import { Spin as Hamburger } from 'hamburger-react'

import { IconButton, Menu, MenuItem, Typography } from '@mui/material'
import { Box } from '@mui/system'
import useBurger from '../../utils/hooks/useBurger'
import { Link } from 'react-router-dom'

const settings = ['Home', 'Profile', 'Login']

const Burger = () => {
  const {
    handleCloseUserMenu,
    handleOpenUserMenu,
    anchorElUser,
    isOpen,
    setOpen,
  } = useBurger()

  return (
    <Box
      sx={{
        flexGrow: 0,
        display: { xs: 'flex', sm: 'flex', md: 'none' },
      }}
    >
      <IconButton
        aria-label="Hamburger"
        onClick={handleOpenUserMenu}
        sx={{
          p: 0,
          color: 'primary.white',
        }}
      >
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </IconButton>
      <Menu
        sx={{ mt: '70px' }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {settings.map((setting) => (
          <MenuItem key={setting} onClick={handleCloseUserMenu}>
            <Link
              style={{
                textDecoration: 'none',
              }}
              to={setting === 'Home' ? '/' : setting}
            >
              <Typography
                sx={{
                  color: 'primary.text',
                }}
                textAlign="center"
              >
                {setting}
              </Typography>
            </Link>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  )
}

export default Burger
