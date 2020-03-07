/* eslint-disable arrow-body-style */
/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import FooterTop from './footerTop'

import "../styles/main.scss"

const Layout = ({ children, layoutContainerStyle, footerTopStyle }) => {
  return (
    <>
      <div className={`${'layoutContainer'} ${layoutContainerStyle}`}>
        <main>{children}</main>
        <FooterTop pageStyle={footerTopStyle} />
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
  layoutContainerStyle: PropTypes.node.isRequired,
  footerTopStyle: PropTypes.string
}

export default Layout
