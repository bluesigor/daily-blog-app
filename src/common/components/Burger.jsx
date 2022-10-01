import React from 'react'
import { Link } from 'react-router-dom'
import { Spin as Hamburger } from 'hamburger-react'
import { IconButton, Menu, MenuItem, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useSelector } from 'react-redux'

import useBurger from '../../utils/hooks/useBurger'
import Localizator from './Localizator'
import {
  isLoggedInSelector,
  nameSelector,
} from '../../store/selectors/userDataSelectors'
import Logout from './Logout'
import Login from './Login'

const Burger = () => {
  const {
    handleCloseUserMenu,
    handleOpenUserMenu,
    anchorElUser,
    isOpen,
    setOpen,
  } = useBurger()
  const isLoggedIn = useSelector(isLoggedInSelector)
  const name = useSelector(nameSelector)

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
        <MenuItem onClick={handleCloseUserMenu}>
          <Link
            style={{
              textDecoration: 'none',
            }}
            to="/"
          >
            <Typography
              sx={{
                fontSize: { xs: 16, sm: 20, md: 25 },
                color: 'primary.text',
                textTransform: 'capitalize',
              }}
              textAlign="center"
            >
              <Localizator text="Home" />
            </Typography>
          </Link>
        </MenuItem>
        {isLoggedIn && (
          <MenuItem onClick={handleCloseUserMenu}>
            <Link
              style={{
                textDecoration: 'none',
              }}
              to={`profile/:${name}`}
            >
              <Typography
                sx={{
                  fontSize: { xs: 16, sm: 20, md: 25 },
                  color: 'primary.text',
                  textTransform: 'capitalize',
                }}
                textAlign="center"
              >
                <Localizator text="Profile" />
              </Typography>
            </Link>
          </MenuItem>
        )}
        {isLoggedIn ? (
          <MenuItem onClick={handleCloseUserMenu}>
            <Logout />
          </MenuItem>
        ) : (
          <MenuItem onClick={handleCloseUserMenu}>
            <Login />
          </MenuItem>
        )}
      </Menu>
    </Box>
  )
}

export default Burger
