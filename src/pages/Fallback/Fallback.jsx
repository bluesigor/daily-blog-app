import React from 'react'
import { Container, Typography } from '@mui/material'
import Localizator from '../../common/components/Localizator'

const Fallback = () => {
  return (
    <Container p={4}>
      <Typography component="h4" variant="p">
        <Localizator text="Something went wrong!" />
      </Typography>
    </Container>
  )
}

export default Fallback
