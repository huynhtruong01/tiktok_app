import React from "react"
import PropTypes from "prop-types"
import "./Content.scss"
import { videoList } from "../../../../database/videoList"
import girls from "../../../../assets/image/girls.jpeg"
import { HiMusicNote } from "react-icons/hi"

Content.propTypes = {}

function Content(props) {
  return (
    <div className="content">
      <div className="content__feed">
        <div className="content__video--list">
          {videoList.length > 0 &&
            videoList.map((item) => (
              <>
                <span className="content__video--item" key={item.id}>
                  <div className="content__video--container">
                    <a href="#" className="content__avatar">
                      <img src={girls} alt="" />
                    </a>
                    <div className="content__video" key={item.id}>
                      <div className="content__video--author--info">
                        <a href="#">babywitch.98</a>
                        <a href="#">Huỳnh Như</a>
                      </div>
                      <div className="content__video--description">
                        <strong>
                          Lần đầu tiên VN ( cũng như TG) thử nghiệm công nghệ
                          laser hologram tại Landmark. Đỉnh quaa mọi người
                        </strong>
                        <a href="#">
                          <strong>#saigon </strong>
                        </a>
                        <a href="#">
                          <strong>#hochiminh </strong>
                        </a>
                        <a href="#">
                          <strong>#giangsinh2021 </strong>
                        </a>
                      </div>
                      <button className="content__video--following">
                        Follow
                      </button>
                      <div className="content__video--title-music">
                        <HiMusicNote />
                        <a href="#">nhạc nền - Huỳnh Như</a>
                      </div>
                      <div className="content__video--play">
                        <video
                          src={item.playAddr}
                          controls
                          playsInline
                          loop
                        ></video>
                      </div>
                    </div>
                  </div>
                </span>
              </>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Content
