import React from "react"
import logo from "../assets/images/logo.svg"
import { FaAlignRight } from "react-icons/fa"
import pageLinks from "../constants/links"
import { Link } from "gatsby"

const Navbar = () => {
  return <nav>
    <div className="nav-center">
      <div className="nav-header">
        <img src={logo} alt="web dev" />
        <button type="button" className="toggle-btn">
          <FaAlignRight/>
        </button>
      </div>
    </div>
    </nav>
}

export default Navbar
