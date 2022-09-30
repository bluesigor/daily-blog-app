import { Container, Box, Typography } from '@mui/material'
import React from 'react'
import Localizator from '../../common/components/Localizator'

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
