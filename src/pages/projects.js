import React from "react"

import Sidebar from "../components/sidebar"
import Layout from "../components/layout"
import Nav from "../components/nav"
import SEO from "../components/seo"

import projectsStyles from "../styles/modules/projects.module.scss"

import Spotify from '../svg/spotify.svg'

const ProjectsPage = () => (
  <>
    <div className={`${"gridContainer"} ${projectsStyles.gridContainer}`}>
      <Sidebar propStyle={projectsStyles.sidebar___projects} />
      <header>
        <Nav propActiveStyle={projectsStyles.activeLink} propLinkStyle={projectsStyles.navLink}/>
      </header>
      <Layout>
        <SEO title="Projects" />
        <h2>Projects</h2>
        <Spotify />
      </Layout>
    </div>
  </>
)

export default ProjectsPage
