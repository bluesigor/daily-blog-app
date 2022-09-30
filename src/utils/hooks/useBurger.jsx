import { useCallback, useState } from 'react'

const useBurger = () => {
  const [anchorElUser, setAnchorElUser] = useState(null)
  const [isOpen, setOpen] = useState(false)

  const handleOpenUserMenu = useCallback((event) => {
    setAnchorElUser(event.currentTarget)
    setOpen(true)
  }, [])

  const handleCloseUserMenu = useCallback(() => {
    setAnchorElUser(null)
    setOpen(false)
  }, [])

  return {
    setOpen,
    handleCloseUserMenu,
    handleOpenUserMenu,
    anchorElUser,
    isOpen,
  }
}

export default useBurger
