import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Sidebar from "../components/sidebar"
import Layout from "../components/layout"
import Nav from "../components/nav"
import SEO from "../components/seo"
import Menu from "../components/hamburgerMenu"

import aboutStyles from "../styles/modules/about.module.scss"

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query {
      headshot: file(relativePath: { eq: "headshot.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <>
      <div className={`${"gridContainer"}`}>
        <Sidebar propStyle={aboutStyles.sidebar___about} />
        <header>
          <Nav
            id="navComponent"
            propActiveStyle={aboutStyles.activeLink}
            propLinkStyle={aboutStyles.navLink}
          />
          <Menu/>
        </header>
        <Layout layoutContainerStyle={aboutStyles.layoutContainer}>
          <SEO title="About" />
          <h2>About</h2>
          <div className={aboutStyles.imgContainer}>
            <Img
              className={aboutStyles.headshot}
              fluid={data.headshot.childImageSharp.fluid}
            />
          </div>
          <p className={aboutStyles.p}>
            Rob Moose is a Grammy Award-winning arranger and string player based
            in New York and Los Angeles. He&apos;s written and recorded charts
            for over 400 albums, including work by Bon Iver, Paul Simon, and
            John Legend. As an orchestrator, Moose has been repeatedly featured
            on the Declassified Series at the Kennedy Center alongside artists
            such as Regina Spektor, Emily King and Ben Folds. He recently served
            as music director for Sara Bareilles&apos; &quot;Amidst The
            Chaos&quot; tour and is a regular contributor to the podcast{" "}
            <em>Punch Up The Jam</em>.
          </p>
        </Layout>
      </div>
    </>
  )
}

export default AboutPage
