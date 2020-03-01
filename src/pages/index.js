import React from "react"
import BackgroundImage from "gatsby-background-image"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"

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
      <SEO title="Home"/>
      <BackgroundImage
      className={indexStyles.backgroundImg}
      fluid={data.background.childImageSharp.fluid}
      >
        <header>Header</header>
        <h1>Rob Moose</h1>
        <footer>© {new Date().getFullYear()}</footer>
      </BackgroundImage>
    </>
  )
}

export default IndexPage
