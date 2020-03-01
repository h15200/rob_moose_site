import React from "react"
import { Link } from 'gatsby'
import navStyles from "../styles/modules/nav.module.scss"


const Nav = () => (
  <>
    <nav className={navStyles.nav}>
      <ul className={navStyles.ul}>
        <li className={navStyles.li}>
          <Link to="/" className={navStyles.a}>
            Home
          </Link>
        </li>
        <li className={navStyles.li}>
          <Link to="/about" className={navStyles.a}>
            About
          </Link>
        </li>
        <li className={navStyles.li}>
          <Link to="/projects" className={navStyles.a}>
            Projects
          </Link>
        </li>
        <li className={navStyles.li}>
          <Link to="/contact" className={navStyles.a}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  </>
)

export default Nav
