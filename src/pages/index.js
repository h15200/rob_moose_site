import React from "react"
import Img from "gatsby-image"
import { Link, useStaticQuery, graphql } from "gatsby"

import SEO from "../components/seo"
import indexStyles from "../styles/modules/index.module.scss"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      background: file(relativePath: { eq: "background.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <>
      <SEO title="Home" />
      <Img
        className={indexStyles.backgroundImg}
        fluid={data.background.childImageSharp.fluid}
      />

      <header> {/* nav for home page is different from other pages */}
        <nav className={indexStyles.nav}>
          <ul className={indexStyles.ul}>
            <li className={indexStyles.li}>
              <Link to="/about" className={indexStyles.a}>
                About
              </Link>
            </li>
            <li className={indexStyles.li}>
              <Link to="/projects" className={indexStyles.a}>
                Projects
              </Link>
            </li>
            <li className={indexStyles.li}>
              <Link to="/contact" className={indexStyles.a}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <h1 className={indexStyles.header_1}>
        Rob Moose{" "}
        <span className={indexStyles.subHeading}>
          string arrangements and recording
        </span>
      </h1>

      <footer className={indexStyles.footer}>
        <p>Copyright © {new Date().getFullYear()}</p>
        <p>Designed and developed by Hideaki Aomori</p>
      </footer>
    </>
  )
}

export default IndexPage
