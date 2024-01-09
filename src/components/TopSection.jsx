import React from 'react'
import video from "../videos/banner-video.mp4"
import Btn from './Btn'
import "./common/common.css" 

const TopSection = () => {
    return (
      <div className='banner'>
          <div className="flex h-[100vh] justify-between items-center">
              <div className="left md:w-1/2 pr-8">
                  <h2 className='text-5xl font-bold'>
                      Create Minimal <br /> Templates for Notion
                  </h2>
                  <p className='mt-4 mb-2 text-2xl text-gray-700'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, corporis excepturi! Vitae veritatis enim similique. </p>
                  <div className="mb-2"> <Btn text={"lg"} btn={"Get Notionlink"} font={"medium"} py={"2"} px={"8"} /></div>
              </div>
              <div className="right">
                  <video autoPlay loop muted src={video}></video>
              </div>
          </div> 

    </div>
  )
}

export default TopSection