import React from 'react'
import {
  AiOutlineCloudUpload,
  AiOutlineQuestionCircle,
  AiOutlineUser,
} from 'react-icons/ai'
import { BiMessageAltMinus } from 'react-icons/bi'
import { BsKeyboard } from 'react-icons/bs'
import { FiLogOut, FiSearch, FiSend } from 'react-icons/fi'
import { ImCoinEuro } from 'react-icons/im'
import { MdAccountCircle, MdLanguage } from 'react-icons/md'
import { RiSettings5Line } from 'react-icons/ri'
import './Header.scss'

Header.propTypes = {}

function Header(props) {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <a href="#">
            <img
              src="https://lf16-tiktok-web.ttwstatic.com/obj/tiktok-web/tiktok/web/node/_next/static/images/logo-whole-c555aa707602e714ec956ac96e9db366.svg"
              alt=""
            />
          </a>
        </div>
        <div className="header__search">
          <form className="header__search--container">
            <input type="text" placeholder="Tìm kiếm tài khoản và video" />
            <button type="submit">
              <FiSearch />
            </button>
          </form>
        </div>
        <div className="header__nav">
          <div className="header__nav--icon header__nav--upload">
            <AiOutlineCloudUpload />
            <p className="header__nav--desc">
              Tải video
              <span></span>
            </p>
          </div>
          <div className="header__nav--icon  header__nav--message">
            <FiSend />
            <p className="header__nav--desc">
              Tin nhắn <span></span>
            </p>
          </div>
          <div className="header__nav--icon  header__nav--inbox">
            <BiMessageAltMinus />
            <p className="header__nav--desc">
              Hộp thư <span></span>
            </p>
          </div>
          <div className="header__nav--icon  header__nav--account">
            <MdAccountCircle />
            <div className="header__nav--desc header__nav--info">
              <span></span>
              <ul className="header__nav--list">
                <li>
                  <a href="#">
                    <AiOutlineUser />
                    <span>Xem hồ sơ</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <ImCoinEuro />
                    <span>Nhận xu</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <RiSettings5Line />
                    <span>Cài đặt</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <MdLanguage />
                    <span>Tiếng Việt</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <AiOutlineQuestionCircle />
                    <span>Phản hồi</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <BsKeyboard />
                    <span>Phím tắt trên bàn phím</span>
                  </a>
                </li>
              </ul>
              <div className="header__logout">
                <button>
                  <FiLogOut />
                  <span>Đăng xuất</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
