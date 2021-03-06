import React from "react"

import Sidebar from "../components/sidebar"
import CornerColor from "../components/cornerColor"
import Layout from "../components/layout"
import Nav from "../components/nav"
import SEO from "../components/seo"
import Menu from "../components/hamburgerMenu"

import Instagram from "../svg/instagram.svg"

import contactStyles from "../styles/modules/contact.module.scss"

const ContactPage = () => {
  return (
    <>
      <div className={`${"gridContainer"} ${contactStyles.gridContainer}`}>
        <Sidebar propStyle={contactStyles.sidebar___contact} />
        <CornerColor pageStyle={contactStyles.corner} />
        <header>
          <Nav
            propActiveStyle={contactStyles.activeLink}
            propLinkStyle={contactStyles.navLink}
          />
          <Menu />
        </header>
        <Layout
          layoutContainerStyle={contactStyles.layoutContainer}
          footerTopStyle={contactStyles.footerTop}
        >
          <SEO title="Contact" />

          <h2>Contact</h2>
          <div className={contactStyles.center}>
            <a
              href="https://www.instagram.com/mooserob/?hl=en"
              className={contactStyles.instagramLink}
              target="_blank"
              rel="noreferrer noopener"
            >
              <Instagram className={contactStyles.instagram} />
            </a>
            <h3 className={contactStyles.contact}>
              For booking please contact David Passick at:
            </h3>
            <a
              className={contactStyles.emailLink}
              href="mailto:placeholder@example.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              PLACEHOLDER@EXAMPLE.COM
            </a>
          </div>
        </Layout>
      </div>
    </>
  )
}

export default ContactPage
