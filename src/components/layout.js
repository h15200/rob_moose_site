/* eslint-disable arrow-body-style */
/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import "../styles/main.scss"

const Layout = ({ children }) => {
  return (
    <>
      <div className="container">
        <main>{children}</main>
        <footer>
          <p>Copyright © {new Date().getFullYear()}</p>
          <p>
            Designed and developed by{" "}
            <a
              className="hideaki_link"
              href="https://www.hideakiaomori.com/dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hideaki Aomori
            </a>
          </p>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
