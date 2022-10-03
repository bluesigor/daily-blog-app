import React from 'react'
import { Box } from '@mui/material'

import mainLogo from '../../../assets/images/blogo.svg'

const Logo = () => {
  return (
    <Box
      component="img"
      src={mainLogo}
      sx={{
        height: 255,
        display: 'block',
        maxWidth: { xs: '300px', sm: '300px', md: '400px' },
        overflow: 'hidden',
        width: '100%',
      }}
    />
  )
}

export default Logo
