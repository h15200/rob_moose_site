import React from "react"
import PropTypes from "prop-types"

import cornerStyles from "../styles/modules/cornerColor.module.scss"

const CornerColor = props => {
  return <div className={`${cornerStyles.corner} ${props.pageStyle}`}></div>
}

CornerColor.propTypes = {
  pageStyle: PropTypes.string,
}

export default CornerColor
