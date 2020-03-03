import React from "react"

import Sidebar from '../components/sidebar'
import Layout from "../components/layout"
import Nav from '../components/nav'
import SEO from "../components/seo"

import contactStyles from '../styles/modules/contact.module.scss'

const ContactPage = () => (
  <>
  <Sidebar propStyle={contactStyles.sidebar___contact} />
  <header>
    <Nav propStyle={contactStyles.activeLink} />
  </header>
  <Layout>
    <SEO title="Contact" />
    <h2>Contact Page</h2>
  </Layout>
  </>
)

export default ContactPage
