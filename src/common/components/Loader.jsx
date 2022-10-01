import { Container } from '@mui/system'
import React from 'react'
import { ThreeDots } from 'react-loader-spinner'
import useLoading from '../../utils/hooks/useLoading'

const Loader = () => {
  const { isLoading } = useLoading()

  if (isLoading) {
    return (
      <Container m={2}>
        <ThreeDots />
      </Container>
    )
  }

  return null
}

export default Loader
