import React from 'react'
import PropTypes from 'prop-types'
import './Main.scss'
import SideBar from './pages/SideBar'
import Content from './pages/Content'

Main.propTypes = {}

function Main(props) {
  return (
    <main className="main">
      <div className="main__container">
        <div className="main__sidebar">
          <SideBar />
        </div>
        <div className="main__content">
          <Content />
        </div>
      </div>
    </main>
  )
}

export default Main
