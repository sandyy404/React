import React from 'react'
import Footer from './Component/Footer/Footer'
import Header from './Component/Header/Header'
import { Outlet } from 'react-router-dom'
function Layout() {
   return (
      <>
         <Header />
         <Outlet />
         <Footer />
      </>
   )
}

export default Layout
