import './App.scss'
import { useEffect, useState } from 'react'
import Header from './features/Header'
import { videoList } from './database/videoList'
import Main from './features/Main'

function App() {
  // useEffect(() => {
  //   const fetchTiktokApi = async () => {
  //     try {
  //       const res = await fetch(
  //         'https://tz-tiktokapi.herokuapp.com/api/videoList'
  //       )
  //       const data = await res.json()
  //       setVideoList(data)
  //     } catch (error) {
  //       console.log('Error to fetch', error)
  //     }
  //   }

  //   fetchTiktokApi()
  // }, [])
  console.log(videoList)
  return (
    <div>
      <Header />
      <Main />
      {/* <div className="container">
        {videoList.length > 0 &&
          videoList.map((item) => (
            <div className="video" key={item.id}>
              <video src={item.playAddr} controls playsInline loop></video>
            </div>
          ))}
      </div> */}
    </div>
  )
}

export default App
