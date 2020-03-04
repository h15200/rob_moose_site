import React from "react"

import Sidebar from "../components/sidebar"
import Layout from "../components/layout"
import Nav from "../components/nav"
import SEO from "../components/seo"

import projectsStyles from "../styles/modules/projects.module.scss"

import Spotify from "../svg/spotify.svg"

const ProjectsPage = () => (
  <>
    <div className={`${"gridContainer"} ${projectsStyles.gridContainer}`}>
      <Sidebar propStyle={projectsStyles.sidebar___projects} />
      <header>
        <Nav
          propActiveStyle={projectsStyles.activeLink}
          propLinkStyle={projectsStyles.navLink}
        />
      </header>
      <Layout layoutContainerStyle={projectsStyles.layoutContainer}>
        <SEO title="Projects" />
        <h2>Projects</h2>
        <div className={projectsStyles.center}>
          <a
            href="https://open.spotify.com/artist/1NpeO0rYdDwUjtaXMDlb25"
            className={projectsStyles.spotifyLink}
            target="_blank"
            rel="noreferrer noopener"
          >
            <Spotify className={projectsStyles.spotify} />
          </a>
        </div>
        <div className={projectsStyles.videoContainer}>
          <iframe
            className={projectsStyles.video}
            title="w/ Sara Bareilles at Madison Square"
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/3hd-Es-Bh4Y?rel=0"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <iframe
            className={projectsStyles.video}
            title="w/ Phoebe Bridgers at NPR Tiny Desk Concert"
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/-hLJNZSIwP8?rel=0"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <iframe
            className={projectsStyles.video}
            title="w/ Punch Brothers at Telluride Bluegrass Festiva"
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/JEeeoManQtY?rel=0"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <iframe
            className={projectsStyles.video}
            title="w/ Kesha at Billboard Music Awards"
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/SnwbXbvur4g?rel=0"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <iframe
            className={projectsStyles.video}
            title="w/ Regina Spektor at The Kennedy Center"
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/2U_I073jZu0?rel=0"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div className={projectsStyles.center}>
          <a
            className={projectsStyles.allmusicLink}
            href="https://www.allmusic.com/artist/rob-moose-mn0000563132/credits"
            target="_blank"
            rel="noreferrer noopener"
          >
            See all discography
          </a>
        </div>
      </Layout>
    </div>
  </>
)

export default ProjectsPage
