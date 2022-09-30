import React from 'react'
import { Link } from 'react-router-dom'
import { Spin as Hamburger } from 'hamburger-react'
import { IconButton, Menu, MenuItem, Typography } from '@mui/material'
import { Box } from '@mui/system'

import useBurger from '../../utils/hooks/useBurger'
import { settings } from '../../utils/constants/consts'
import Localizator from './Localizator'

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
                  fontSize: { xs: 16, sm: 20, md: 25 },
                  color: 'primary.text',
                  textTransform: 'capitalize',
                }}
                textAlign="center"
              >
                <Localizator text={setting} />
              </Typography>
            </Link>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  )
}

export default Burger
