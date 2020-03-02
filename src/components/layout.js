/* eslint-disable arrow-body-style */
/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import "../styles/main.scss"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="container">
        <main>{children}</main>
        <footer>
          <p>Copyright © {new Date().getFullYear()}</p>
          <p>Designed and developed by Hideaki Aomori</p>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
