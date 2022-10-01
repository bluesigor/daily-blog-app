import React from 'react'
import { Container } from '@mui/system'
import { useSelector } from 'react-redux'
import { Typography } from '@mui/material'

import { nameSelector } from '../../store/selectors/userDataSelectors'

const Profile = () => {
  const name = useSelector(nameSelector)

  return (
    <Container>
      <Typography>{name}</Typography>
    </Container>
  )
}

export default Profile
