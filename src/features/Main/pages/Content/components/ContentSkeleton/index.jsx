import React from "react"
import PropTypes from "prop-types"
import "./ContentSkeleton.scss"

ContentSkeleton.propTypes = {}

function ContentSkeleton(props) {
  return (
    <div className="content__skeleton">
      <div className="content__loading"></div>
    </div>
  )
}

export default ContentSkeleton
