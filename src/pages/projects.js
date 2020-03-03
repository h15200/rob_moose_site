import React from "react"

import Layout from "../components/layout"
import Sidebar from '../components/sidebar'
import Nav from '../components/nav'
import SEO from "../components/seo"

import projectsStyles from '../styles/modules/projects.module.scss'

const ProjectsPage = () => (
  <>
  <Sidebar propStyle={projectsStyles.sidebar___projects} />
  <header>
    <Nav propStyle={projectsStyles.activeLink} />
  </header>
  <Layout>
    <SEO title="Projects" />
    <h2>Projects Page</h2>
  </Layout>
  </>
)

export default ProjectsPage
