import React from 'react'
import { Box, Container, Button } from '@mui/material'

const Login = () => {
  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          minHeight: '40vh',
          minWidth: '100%',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',

          bgcolor: 'primary.main',
          mt: 6,
        }}
      >
        <Button size="large">Sign In</Button>
      </Box>
    </Container>
  )
}

export default Login
