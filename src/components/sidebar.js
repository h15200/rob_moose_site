import React from "react"
import PropTypes from 'prop-types'

import sidebarStyle from '../styles/modules/sidebar.module.scss'

const Sidebar = props => (
  <>
  <div className={`${sidebarStyle.sidebar} ${props.propStyle}`} />
  </>
)

Sidebar.propTypes = {
  propStyle: PropTypes.string
}

export default Sidebar
