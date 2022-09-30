import React from 'react'
import { Box, Typography } from '@mui/material'

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        width: '100%',
        bottom: '0',
        bgcolor: 'primary.main',
        height: '130px',
        position: 'fixed',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: { xs: 'column', sm: 'column', md: 'row' },
        p: { xs: 1, sm: 4, md: 3, xl: 6 },
      }}
    >
      <Typography
        variant="h6"
        component="h1"
        sx={{
          display: { md: 'flex' },
          fontWeight: 700,
          color: 'primary.white',
        }}
      >
        Daily Blog
      </Typography>
      <Typography
        sx={{
          color: 'primary.white',
        }}
        fontSize={15}
        component="p"
      >
        All Copyrights reserved.
      </Typography>
    </Box>
  )
}

export default Footer
