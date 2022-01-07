import React from "react"
import PropTypes from "prop-types"
import "./Content.scss"
import { videoList } from "../../../../database/videoList"
import { useState } from "react"
import ContentSkeleton from "./components/ContentSkeleton"
import ContentVideoItem from "./components/ContentVideoItem"

Content.propTypes = {}

function Content(props) {
  const [loading, setLoading] = useState(false)

  return (
    <div className="content">
      <div className="content__feed">
        <div className="content__video--list">
          {videoList.length > 0 &&
            videoList.map((item, index) => <ContentVideoItem item={item} />)}
        </div>
      </div>
    </div>
  )
}

export default Content
