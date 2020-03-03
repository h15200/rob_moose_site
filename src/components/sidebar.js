import React from "react"
import sidebarStyles from '../styles/modules/sidebar.module.scss'



const Sidebar = props => (
  <>
  <div className={`${sidebarStyles.sidebar} ${props.propStyle}`} />
  </>
)
export default Sidebar
