import { useState } from 'react'

const useLoading = () => {
  const [isLoading, setIsLoading] = useState(false)

  const setLoadingOn = () => {
    setIsLoading(true)
  }

  const setLoadingOff = () => {
    setIsLoading(false)
  }

  return { isLoading, setLoadingOff, setLoadingOn }
}

export default useLoading
