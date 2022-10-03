import React from 'react'
import { Box, CardMedia, IconButton, Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import {
  imgSelector,
  nameSelector,
} from '../../store/selectors/userDataSelectors'

const Account = () => {
  const img = useSelector(imgSelector)
  const name = useSelector(nameSelector)

  return (
    <Box display="flex" flexDirection="row" alignItems="center">
      <Typography
        display={{ xs: 'none', sm: 'none', md: 'inline' }}
        fontSize={18}
        component="p"
      >
        {name}
      </Typography>
      <IconButton size="small" sx={{ ml: 2 }} aria-haspopup="true">
        <Link to={`profile/:${name}`}>
          <CardMedia
            image={img}
            sx={{ width: 42, height: 42, borderRadius: '50%' }}
          />
        </Link>
      </IconButton>
    </Box>
  )
}

export default Account
