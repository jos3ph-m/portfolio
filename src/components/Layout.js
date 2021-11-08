import React, { useState } from "react"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Footer from "./Footer"

import "../assets/css/main.css"
const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => {}

  return (
    <>
      <Navbar />
      <Sidebar />
      {children}
      <Footer />
    </>
  )
}

export default Layout
