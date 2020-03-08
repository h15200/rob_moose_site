import React from "react"

import Sidebar from "../components/sidebar"
import CornerColor from "../components/cornerColor"
import Layout from "../components/layout"
import Nav from "../components/nav"
import SEO from "../components/seo"
import Menu from "../components/hamburgerMenu"

import projectsStyles from "../styles/modules/projects.module.scss"

import Spotify from "../svg/spotify.svg"

const ProjectsPage = () => (
  <>
    <div className={`${"gridContainer"} ${projectsStyles.gridContainer}`}>
      <Sidebar propStyle={projectsStyles.sidebar___projects} />
      <CornerColor pageStyle={projectsStyles.corner} />
      <header>
        <Nav
          propActiveStyle={projectsStyles.activeLink}
          propLinkStyle={projectsStyles.navLink}
        />
        <Menu />
      </header>
      <Layout
        layoutContainerStyle={projectsStyles.layoutContainer}
        footerTopStyle={projectsStyles.footerTop}
      >
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
            title="Video - Rob Moose w/ Sara Bareilles at Madison Square"
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/3hd-Es-Bh4Y?rel=0"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
            srcDoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube-nocookie.com/embed/3hd-Es-Bh4Y?rel=0><img src=https://img.youtube.com/vi/3hd-Es-Bh4Y/hqdefault.jpg alt='Video - Rob Moose w/ Sara Bareilles at Madison Square'><span>▶</span></a>"
          />
          <iframe
            className={projectsStyles.video}
            title="Rob Moose w/ Phoebe Bridgers at NPR Tiny Desk Concert"
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/-hLJNZSIwP8?rel=0"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
            srcDoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube-nocookie.com/embed/-hLJNZSIwP8?rel=0><img src=https://img.youtube.com/vi/-hLJNZSIwP8/hqdefault.jpg alt='Rob Moose w/ Phoebe Bridgers at NPR Tiny Desk Concert'><span>▶</span></a>"
          />
          <iframe
            className={projectsStyles.video}
            title="Rob Moose w/ Punch Brothers at Telluride Bluegrass Festival"
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/JEeeoManQtY?rel=0"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
            srcDoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube-nocookie.com/embed/JEeeoManQtY?rel=0><img src=https://img.youtube.com/vi/JEeeoManQtY/hqdefault.jpg alt='Rob Moose w/ Punch Brothers at Telluride Bluegrass Festival'><span>▶</span></a>"
          />
          <iframe
            className={projectsStyles.video}
            title="Rob Moose w/ Kesha at Billboard Music Awards"
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/SnwbXbvur4g?rel=0"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
            srcDoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube-nocookie.com/embed/SnwbXbvur4g?rel=0><img src=https://img.youtube.com/vi/SnwbXbvur4g/hqdefault.jpg alt='Rob Moose w/ Kesha at Billboard Music Awards'><span>▶</span></a>"
          />
          <iframe
            className={projectsStyles.video}
            title="Rob Moose w/ Regina Spektor at The Kennedy Center"
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/2U_I073jZu0?rel=0"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
            srcDoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube-nocookie.com/embed/2U_I073jZu0?rel=0><img src=https://img.youtube.com/vi/2U_I073jZu0/hqdefault.jpg alt='Rob Moose w/ Regina Spektor at The Kennedy Center'><span>▶</span></a>"
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
