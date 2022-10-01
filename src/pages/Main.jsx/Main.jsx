import { Container, Box, Typography } from '@mui/material'
import React from 'react'

const Main = () => {
  return (
    <Container
      sx={{
        minHeight: '200px',
      }}
      maxWidth="xl"
    >
      <Box
        sx={{
          bgcolor: 'primary.light',
        }}
      >
        <Typography>Hello Main</Typography>
      </Box>
    </Container>
  )
}

export default Main
