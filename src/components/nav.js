import React from "react"
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import navStyles from "../styles/modules/nav.module.scss"

const Nav = props => (
  <>
    <nav className={navStyles.nav}>
      <ul className={navStyles.ul}>
        <li className={navStyles.li}>
          <Link to="/" className={`${navStyles.a} ${props.propLinkStyle}`} >
            Home
          </Link>
        </li>
        <li className={navStyles.li}>
          <Link to="/about" className={`${navStyles.a} ${props.propLinkStyle}`} activeClassName={`${navStyles.active} ${props.propActiveStyle}`}>
            About
          </Link>
        </li>
        <li className={navStyles.li}>
          <Link to="/projects" className={`${navStyles.a} ${props.propLinkStyle}`} activeClassName={`${navStyles.active} ${props.propActiveStyle}`}>
            Projects
          </Link>
        </li>
        <li className={navStyles.li}>
          <Link to="/contact" className={`${navStyles.a} ${props.propLinkStyle}`} activeClassName={`${navStyles.active} ${props.propActiveStyle}`}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  </>
)
Nav.propTypes = {
  propLinkStyle: PropTypes.string,
  propActiveStyle: PropTypes.string
}

export default Nav
