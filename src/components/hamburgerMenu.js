import React from 'react'
import PropTypes from "prop-types"

import menuStyles from '../styles/modules/hamburgerMenu.module.scss'

const HamburgerMenu = props => {
  return (
    <>
    <button id="btn" className={`${menuStyles.icon} ${props.propMenuIconStyle}`} onClick={props.toggleFunc}>
      <div className={`${menuStyles.hamburger} ${props.propMenuHamburgerStyle}`} />
    </button>
    </>
  )
}

HamburgerMenu.propTypes = {
  toggleFunc: PropTypes.func,
  propMenuIconStyle: PropTypes.string,
  propMenuHamburgerStyle: PropTypes.string
}

export default HamburgerMenu

