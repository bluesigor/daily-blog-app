import { useCallback, useState } from 'react'

const useBurger = () => {
  const [anchorElUser, setAnchorElUser] = useState(null)
  const [isOpen, setOpen] = useState(false)

  const handleOpenUserMenu = useCallback(
    (event) => {
      setAnchorElUser(event.currentTarget)
      setOpen(true)
    },
    [isOpen, anchorElUser],
  )

  const handleCloseUserMenu = useCallback(() => {
    setAnchorElUser(null)
    setOpen(false)
  }, [anchorElUser, isOpen])

  return {
    setOpen,
    handleCloseUserMenu,
    handleOpenUserMenu,
    anchorElUser,
    isOpen,
  }
}

export default useBurger
