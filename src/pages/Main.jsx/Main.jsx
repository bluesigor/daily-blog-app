import React from 'react'
import { useSelector } from 'react-redux'
import { Container, Box, Typography } from '@mui/material'
import GoogleLogin from 'react-google-login'

import Localizator from '../../common/components/Localizator'
import Logo from './components/Logo'
import { CLIENT_ID } from '../../utils/api/client'
import useAuth from '../../utils/hooks/useAuth'
import { isLoggedInSelector } from '../../store/selectors/userDataSelectors'

const Main = () => {
  const { onSuccess, onFailure } = useAuth()
  const isLoggedIn = useSelector(isLoggedInSelector)

  return (
    <Container
      sx={{
        minHeight: '70.6vh',
        my: '40px',
      }}
      maxWidth="xl"
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        bgcolor="primary.white"
        px={3}
        border="1px solid inherit"
        borderRadius={2}
      >
        <Typography
          component="p"
          variant="h5"
          lineHeight={2}
          letterSpacing={3}
          fontWeight={700}
          fontSize={{ xs: '22px', sm: '24px', md: '38px' }}
        >
          <Localizator text="Be provocative,proactive. Share your thoughts about today!" />
        </Typography>
      </Box>
      <Box
        px={3}
        display="flex"
        mt={{ xs: 2, sm: 4, md: 6, xl: 10 }}
        alignItems="center"
        justifyContent="center"
      >
        <Logo />
        <Typography
          component="h1"
          sx={{
            ml: '50px',
            fontFamily: 'Tahoma',
            fontSize: { xs: '40px', sm: 60, md: 100, xl: '150px' },
            letterSpacing: '1.8px',
            color: 'primary.main',
            mt: 15,
          }}
        >
          IT
        </Typography>
      </Box>
      <Box
        mt={{ xs: 0, sm: 4, md: 6, xl: 10 }}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        {!isLoggedIn && (
          <GoogleLogin
            clientId={CLIENT_ID}
            buttonText=<Localizator text="Sign in with Google" />
            onSuccess={onSuccess}
            isSignedIn={true}
            size="small"
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
          />
        )}
      </Box>
    </Container>
  )
}

export default Main
