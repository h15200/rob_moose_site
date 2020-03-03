import React from "react"
import Sidebar from '../components/sidebar'
import Layout from "../components/layout"
import Nav from '../components/nav'
import SEO from "../components/seo"

import aboutStyles from "../styles/modules/about.module.scss"

const AboutPage = () => (
  <>
    <Sidebar propStyle={aboutStyles.sidebar___about} />
    <header>
      <Nav propStyle={aboutStyles.activeLink} />
    </header>
    <Layout>
      <SEO title="About" />
      <h2>About</h2>
    </Layout>
  </>
)

export default AboutPage
