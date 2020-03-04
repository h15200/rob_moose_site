import React from "react"

import Sidebar from '../components/sidebar'
import Layout from "../components/layout"
import Nav from '../components/nav'
import SEO from "../components/seo"

import contactStyles from '../styles/modules/contact.module.scss'

const ContactPage = () => (
  <>
  <div className={`${"gridContainer"} ${contactStyles.gridContainer}`}>
  <Sidebar propStyle={contactStyles.sidebar___contact} />
  <header>
    <Nav propActiveStyle={contactStyles.activeLink} propLinkStyle={contactStyles.navLink}/>
  </header>
  <Layout>
    <SEO title="Contact" />
    <h2>Contact</h2>
  </Layout>
</div>
  </>
)

export default ContactPage
