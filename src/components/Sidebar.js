import React from "react"
import links from "../constants/links"
import socialLinks from "../constants/social_links"
import { Link } from "gatsby"
import { FaTimes } from "react-icons/fa"
const Sidebar = () => {
  const isOpen = true
  return (
    <aside className={isOpen ? "sidebar show-sidebar" : "sidebar"}>
      <button></button>
    </aside>
  )
}

export default Sidebar
