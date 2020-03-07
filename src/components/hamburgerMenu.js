import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import menuStyles from "../styles/modules/hamburgerMenu.module.scss"

const HamburgerMenu = props => {
  const toggleModal = () => {
    const toggle = document.getElementById('toggle')
    toggle.classList.toggle(menuStyles.menuOpen)
  }
  const removeModal = () => {
    const toggle = document.getElementById('toggle')
    toggle.classList.remove(menuStyles.menuOpen)
  }
  return (
    <>
      <div className={menuStyles.container} id="toggle">
        <button
          className={`${menuStyles.icon} ${props.hamburgerIconStyle}`}
          onClick={toggleModal}
        >
          <div className={`${menuStyles.hamburger}`} />
        </button>

        <nav className={menuStyles.nav}>
          <ul className={menuStyles.ul}>
            <li className={menuStyles.li}>
              <Link to="/" className={`${menuStyles.a} `}
              onClick={removeModal}>
                Home
              </Link>
            </li>
            <li className={menuStyles.li}>
              <Link to="/about" className={`${menuStyles.a} `}
              onClick={removeModal}>
                About
              </Link>
            </li>
            <li className={menuStyles.li}>
              <Link to="/projects" className={`${menuStyles.a} `}
              onClick={removeModal}>
                Projects
              </Link>
            </li>
            <li className={menuStyles.li}>
              <Link to="/contact" className={`${menuStyles.a} `}
              onClick={removeModal}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

HamburgerMenu.propTypes = {
  hamburgerIconStyle: PropTypes.string
}

export default HamburgerMenu
