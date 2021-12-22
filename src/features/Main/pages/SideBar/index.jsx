import React from 'react'
import PropTypes from 'prop-types'
import './SideBar.scss'
import { AiFillHome } from 'react-icons/ai'
import { FiUsers } from 'react-icons/fi'
import { RiLiveLine } from 'react-icons/ri'
import girls from '../../../../assets/image/girls.jpeg'
import { HiOutlineHashtag } from 'react-icons/hi'

SideBar.propTypes = {}

function SideBar(props) {
  return (
    <div className="sidebar">
      <div className="sidebar__container">
        <div className="sidebar__container--scroll">
          <div className="sidebar__wrapper">
            <a href="#" className="sidebar__wrapper--item">
              <AiFillHome /> <h2>Dành cho bạn</h2>
            </a>
            <a href="#" className="sidebar__wrapper--item">
              <FiUsers /> <h2>Đang Follow</h2>
            </a>
            <a href="#" className="sidebar__wrapper--item">
              <RiLiveLine /> <h2>LIVE</h2>
            </a>
          </div>
          <div className="sidebar__list--user">
            <p>Tài khoản được đề xuất</p>
            <ul>
              <li>
                <a href="#">
                  <div className="sidebar__list--user-img">
                    <img src={girls} alt="" />
                  </div>
                  <div className="sidebar__list--user-account">
                    <h4>vietphuongthoa98</h4>
                    <p>Việt Phương Thoa</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="sidebar__list--user-img">
                    <img src={girls} alt="" />
                  </div>
                  <div className="sidebar__list--user-account">
                    <h4>vietphuongthoa98</h4>
                    <p>Việt Phương Thoa</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="sidebar__list--user-img">
                    <img src={girls} alt="" />
                  </div>
                  <div className="sidebar__list--user-account">
                    <h4>vietphuongthoa98</h4>
                    <p>Việt Phương Thoa</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="sidebar__list--user-img">
                    <img src={girls} alt="" />
                  </div>
                  <div className="sidebar__list--user-account">
                    <h4>vietphuongthoa98</h4>
                    <p>Việt Phương Thoa</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="sidebar__list--user-img">
                    <img src={girls} alt="" />
                  </div>
                  <div className="sidebar__list--user-account">
                    <h4>vietphuongthoa98</h4>
                    <p>Việt Phương Thoa</p>
                  </div>
                </a>
              </li>
            </ul>
            <div className="sidebar__see--all">
              <p>Xem tất cả</p>
            </div>
          </div>
          <div className="sidebar__follow--list">
            <p>Các tài khoản đang follow</p>
            <ul>
              <li>
                <a href="#">
                  <div className="sidebar__follow--list__img">
                    <img src={girls} alt="" />
                  </div>
                  <div className="sidebar__follow--list__account">
                    <h4>vietphuongthoa98</h4>
                    <p>Việt Phương Thoa</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="sidebar__follow--list__img">
                    <img src={girls} alt="" />
                  </div>
                  <div className="sidebar__follow--list__account">
                    <h4>vietphuongthoa98</h4>
                    <p>Việt Phương Thoa</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="sidebar__follow--list__img">
                    <img src={girls} alt="" />
                  </div>
                  <div className="sidebar__follow--list__account">
                    <h4>vietphuongthoa98</h4>
                    <p>Việt Phương Thoa</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="sidebar__follow--list__img">
                    <img src={girls} alt="" />
                  </div>
                  <div className="sidebar__follow--list__account">
                    <h4>vietphuongthoa98</h4>
                    <p>Việt Phương Thoa</p>
                  </div>
                </a>
              </li>
            </ul>
            <div className="sidebar__follow--list-see--all">
              <p>Xem tất cả</p>
            </div>
          </div>
          <div className="sidebar__discover">
            <p>Khám phá</p>
            <div className="sidebar__discover--list">
              <a href="#">
                <div className="sidebar__discover--item">
                  <HiOutlineHashtag />
                  <span>depchuanrunway</span>
                </div>
              </a>
              <div className="sidebar__discover--item">
                <a href="#">
                  <HiOutlineHashtag />
                  <span>depchuanrunway</span>
                </a>
              </div>
              <a href="#">
                <div className="sidebar__discover--item">
                  <HiOutlineHashtag />
                  <span>depchuanrunway</span>
                </div>
              </a>
              <a href="#">
                <div className="sidebar__discover--item">
                  <HiOutlineHashtag />
                  <span>depchuan</span>
                </div>
              </a>
            </div>
          </div>
          <div className="sidebar__footer">
            <div className="sidebar__flex sidebar__footer--page__link">
              <a href="#">Giới thiệu</a>
              <a href="#">Bảng tin</a>
              <a href="#">Liên hệ</a>
              <a href="#">Sự nghiệp</a>
              <a href="#">ByteDance</a>
            </div>
            <div className="sidebar__flex sidebar__footer--program__link">
              <a href="#">Giới thiệu</a>
              <a href="#">Bảng tin</a>
              <a href="#">Liên hệ</a>
              <a href="#">Sự nghiệp</a>
              <a href="#">ByteDance</a>
            </div>
            <div className="sidebar__flex  sidebar__footer--legal__link">
              <a href="#">Giới thiệu</a>
              <a href="#">Bảng tin</a>
              <a href="#">Liên hệ</a>
              <a href="#">Sự nghiệp</a>
              <a href="#">ByteDance</a>
            </div>
            <div className="sidebar__flex  sidebar__footer--more__link">
              <a href="#">Giới thiệu</a>
              <a href="#">Bảng tin</a>
              <a href="#">Liên hệ</a>
              <a href="#">Sự nghiệp</a>
              <a href="#">ByteDance</a>
            </div>
            <div className="sidebar__footer--more">Thêm</div>
            <div className="sidebar__footer--copyright">© 2022 Tiktok</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SideBar
