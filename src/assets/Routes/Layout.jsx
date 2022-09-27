import React from 'react'

import Navbar from '../../common/components/Navbar'
import Footer from '../../common/components/Footer'

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default Layout
