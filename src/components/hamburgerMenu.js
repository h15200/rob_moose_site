import React from 'react'
import menuStyles from '../styles/modules/hamburgerMenu.module.scss'

const hamburgerMenu = props => {
  return (
    <>
    <button id="btn" className={menuStyles.icon} onClick={props.func}>
      <div className={menuStyles.hamburger} />
    </button>
    </>
  )
}

export default hamburgerMenu
  