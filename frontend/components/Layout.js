import React from 'react';
import Nav from './Nav'

const Layout = ({ children }) => {
  return (
    <>
    	<Nav />
    	{children}
    </>
  )
}

export default Layout;