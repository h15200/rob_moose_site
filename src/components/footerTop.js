import React from "react"
import PropTypes from "prop-types"

import footerTopStyles from "../styles/modules/footerTop.module.scss"

const FooterTop = ({ pageStyle }) => {
  return <div className={`${footerTopStyles.footerTop} ${pageStyle}`}></div>
}

FooterTop.propTypes = {
  pageStyle: PropTypes.string,
}

export default FooterTop
