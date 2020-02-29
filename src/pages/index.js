import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import BackgroundImage from "../components/background-image"
import SEO from "../components/seo"

import indexStyles from '../styles/modules/index.module.scss'

const IndexPage = () => (
  <>
    <div className={indexStyles.container}>
      <BackgroundImage className={indexStyles.backgroundImg} />
      <h1>Rob Moose</h1>
    </div>
  </>
)

export default IndexPage
