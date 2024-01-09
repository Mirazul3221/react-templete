import React from 'react'
import Btn from './Btn'
import { SlGraph } from "react-icons/sl";
import { SlNotebook } from "react-icons/sl";
import { SlPresent } from "react-icons/sl";
const Section3 = () => {
  return (
      <div className='relative'>
          <div className=" banner-revers"></div>
          <div className="bg-[#f1f1f1] py-20 px-10">
          <div >
              <div className="left md:w-1/2">
                  <h2 className='font-medium text-2xl text-gray-700'>Download New Packages</h2>
                  <h2 className='text-5xl font-bold'>Get real-time assistance with your coding queries</h2>
                  <div className="mt-4"> <a href="#">
                  <Btn btn={'Need Help?'} text='lg' py={"2"} font={"normal"} />
                  </a></div>
                  </div>
                  
                    <div className="">
                     
                      <img className='rounded-lg p-4 float-right -mt-60' src="/images/section-2/holiday.jpg" alt="" />
                      <h2 className='text-2xl mt-20 mb-2 font-medium'>What is your goal as an web developer?</h2>
                      <p className='text-lg mb-10 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, iure. Asperiores perferendis pariatur amet tempora, porro cupiditate ullam iusto nesciunt ipsa saepe! Reprehenderit fugit sed aspernatur ducimus, rem excepturi eum?
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, iure. Asperiores perferendis pariatur amet tempora, porro cupiditate ullam iusto nesciunt ipsa saepe! Reprehenderit fugit sed aspernatur ducimus, rem excepturi
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, iure. Asperiores perferendis pariatur amet tempora, porro cupiditate ullam iusto nesciunt ipsa saepe! Reprehenderit fugit sed aspernatur ducimus, rem excepturi eum?
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, iure. Asperiores perferendis pariatur amet tempora, porro cupiditate ullam iusto nesciunt ipsa saepe! Reprehenderit fugit sed aspernatur ducimus, rem excepturi </p>
                  </div>

                  <h2 className='text-5xl text-center mt-20 font-bold'>HTML Website Templates - updated weekly</h2>
                  <div className="main-container border-t-2 py-6 mt-6 grid grid-cols-2">
                      <div className="item scale-95 mb-3 duration-200 hover:scale-100 flex bg-white p-10 gap-4 rounded-lg shadow-lg">
                          <div className="left">
                              <img loading='lazy' src="./images/section-3/cripple.png" alt="" />
                      </div>
                      <div className="right">
                              <h2 className='text-2xl border-b-2 border-gray-400 pb-2'>Vue frameworks</h2>
                              <p className='text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi ea error quos, soluta? </p>

                              <div className="icone space-y-2 mt-3">
                                  <div className="item flex gap-2 items-center">
                                  <SlGraph size={30} color='gray' /> <p className='font-bold'>Lorem ipsum dolor sit</p>
                                  </div>
                                  <div className="item flex gap-2 items-center">
                                  <SlPresent size={30} color='gray' /> <p className='font-bold'>consectetur adipisicing</p>
                                  </div>
                                  <div className="item flex gap-2 items-center">
                                  <SlNotebook size={30} color='gray' /> <p className='font-bold'>adipisicing Explicabo.</p>
                                  </div>
                              </div>
                      </div>
                      </div>
                      <div className="item mb-3 flex scale-95 duration-200 hover:scale-100 p-10 gap-4 rounded-lg bg-black text-white shadow-lg">
                          <div className="left">
                              <img loading='lazy' src="./images/section-3/clip.png" alt="" />
                      </div>
                      <div className="right">
                              <h2 className='text-2xl border-b-2 border-gray-400 pb-2'>Vue frameworks</h2>
                              <p className='text-gray-300'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi ea error quos, soluta? </p>

                              <div className="icone space-y-2 mt-3">
                                  <div className="item flex gap-2 items-center">
                                  <SlGraph  size={30} color='gray' /> <p className='font-bold'>Lorem ipsum dolor sit</p>
                                  </div>
                                  <div className="item flex gap-2 items-center">
                                  <SlPresent size={30} color='gray' /> <p className='font-bold'>consectetur adipisicing</p>
                                  </div>
                                  <div className="item flex gap-2 items-center">
                                  <SlNotebook size={30} color='gray' /> <p className='font-bold'>adipisicing Explicabo.</p>
                                  </div>
                              </div>
                      </div>
                      </div>
                      <div className="item scale-95 duration-200 hover:scale-100 flex p-10 gap-4 bg-black text-white rounded-lg shadow-lg">
                          <div className="left">
                              <img loading='lazy' src="./images/section-3/data.png" alt="" />
                      </div>
                      <div className="right">
                              <h2 className='text-2xl border-b-2 border-gray-400 pb-2'>Vue frameworks</h2>
                              <p className='text-gray-200'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi ea error quos, soluta anim? </p>

                              <div className="icone space-y-2 mt-3">
                                  <div className="item flex gap-2 items-center">
                                  <SlGraph  size={30} color='gray' /> <p className='font-bold'>Lorem ipsum dolor sit</p>
                                  </div>
                                  <div className="item flex gap-2 items-center">
                                  <SlPresent size={30} color='gray' /> <p className='font-bold'>consectetur adipisicing elit</p>
                                  </div>
                                  <div className="item flex gap-2 items-center">
                                  <SlNotebook size={30} color='gray' /> <p className='font-bold'>adipisicing elit. Explicabo.</p>
                                  </div>
                              </div>
                      </div>
                      </div>
                      <div className="item bg-white scale-95 duration-200 hover:scale-100 flex p-10 gap-4 rounded-lg shadow-lg">
                          <div className="left">
                              <img loading='lazy' src="./images/section-3/chemistry.png" alt="" />
                      </div>
                      <div className="right">
                              <h2 className='text-2xl border-b-2 border-gray-400 pb-2'>Vue frameworks</h2>
                              <p className='text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi ea error quos, soluta? </p>

                              <div className="icone space-y-2 mt-3">
                                  <div className="item flex gap-2 items-center">
                                  <SlGraph  size={30} color='gray' /> <p className='font-bold'>Lorem ipsum dolor sit</p>
                                  </div>
                                  <div className="item flex gap-2 items-center">
                                  <SlPresent size={30} color='gray' /> <p className='font-bold'>consectetur adipisicing</p>
                                  </div>
                                  <div className="item flex gap-2 items-center">
                                  <SlNotebook size={30} color='gray' /> <p className='font-bold'>adipisicing elit.</p>
                                  </div>
                              </div>
                      </div>
                      </div>
                  </div>
          
              </div>
          </div>
          <div className="end-banner"></div>
    </div>
  )
}

export default Section3 