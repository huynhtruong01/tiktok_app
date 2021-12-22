import React from 'react'
import PropTypes from 'prop-types'
import './Content.scss'
import { videoList } from '../../../../database/videoList'

Content.propTypes = {}

function Content(props) {
  return (
    <div>
      <div>
        {videoList.length > 0 &&
          videoList.map((item) => (
            <div className="video" key={item.id}>
              <video src={item.playAddr} controls playsInline loop></video>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Content
