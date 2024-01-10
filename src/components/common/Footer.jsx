import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaYoutubeSquare } from "react-icons/fa";
const Footer = () => {
    return (
        <div className="bg-gray-200">
                  <div className='flex justify-between py-10 grid grid-cols-5'>
          <div className="item">
              <ul>
                  <li className='px-4'><a href="/"><img src="./images/logo.png" alt="" /></a></li>
              </ul>
              <p className='px-4 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ab maiores dolorum nulla possimus cumque natus, culpa dicta obcaecati vel perspiciatis, repudiandae quae repellat beatae sint ipsam explicabo laudantium similique?</p>
          </div>
          <div className="item px-5 ">
              <div className="">
                  <h2 className='text-2xl font-medium'> Our Services</h2>
                  <div className="bg-gray-700 w-20 h-[3px] rounded-r-full"></div>
                  <ul className='mt-6'>
                      <li className='hover:underline duration-500 text-gray-600 hover:text-black'><a className='' href="/">Shoulder Replacement</a></li>
                      <li  className='hover:underline duration-500 text-gray-600 hover:text-black'><a className='' href="/">Orthopaedics</a></li>
                      <li  className='hover:underline duration-500 text-gray-600 hover:text-black'><a className='' href="/">Shoulder Pain</a></li>
                      <li  className='hover:underline duration-500 text-gray-600 hover:text-black'><a className='' href="/">Physical Therapy</a></li>
                      <li  className='hover:underline duration-500 text-gray-600 hover:text-black'><a className='' href="/">Diagnostic Imaging</a></li>
                      <li  className='hover:underline duration-500 text-gray-600 hover:text-black'><a className='' href="/">Sports Medicine</a></li>
                      <li  className='hover:underline duration-500 text-gray-600 hover:text-black'><a className='' href="/">Hand Pain</a></li>
                  </ul>
              </div>
              
          </div>
          <div className="item px-5 ">
              <div className="">
                  <h2 className='text-2xl font-medium'>Patient Resources</h2>
                  <div className="bg-gray-700 w-20 h-[3px] rounded-r-full"></div>
                  <ul className='mt-6'>
                      <li className='hover:underline duration-500 text-gray-600 hover:text-black'><a className='' href="/">Shoulder Replacement</a></li>
                      <li  className='hover:underline duration-500 text-gray-600 hover:text-black'><a className='' href="/">Orthopaedics</a></li>
                      <li  className='hover:underline duration-500 text-gray-600 hover:text-black'><a className='' href="/">Shoulder Pain</a></li>
                      <li  className='hover:underline duration-500 text-gray-600 hover:text-black'><a className='' href="/">Physical Therapy</a></li>
                      <li  className='hover:underline duration-500 text-gray-600 hover:text-black'><a className='' href="/">Diagnostic Imaging</a></li>
                      <li  className='hover:underline duration-500 text-gray-600 hover:text-black'><a className='' href="/">Sports Medicine</a></li>
                      <li  className='hover:underline duration-500 text-gray-600 hover:text-black'><a className='' href="/">Hand Pain</a></li>
                  </ul>
              </div>
              
          </div>
          <div className="item px-5 ">
              <div className="">
                  <h2 className='text-2xl font-medium'> Shoulder Pain</h2>
                  <div className="bg-gray-700 w-20 h-[3px] rounded-r-full"></div>
                  <ul className='mt-6'>
                      <li className='hover:underline duration-500 text-gray-600 hover:text-black'><a className='' href="/">Shoulder Replacement</a></li>
                      <li  className='hover:underline duration-500 text-gray-600 hover:text-black'><a className='' href="/">Orthopaedics</a></li>
                      <li  className='hover:underline duration-500 text-gray-600 hover:text-black'><a className='' href="/">Shoulder Pain</a></li>
                      <li  className='hover:underline duration-500 text-gray-600 hover:text-black'><a className='' href="/">Physical Therapy</a></li>
                      <li  className='hover:underline duration-500 text-gray-600 hover:text-black'><a className='' href="/">Diagnostic Imaging</a></li>
                      <li  className='hover:underline duration-500 text-gray-600 hover:text-black'><a className='' href="/">Sports Medicine</a></li>
                      <li  className='hover:underline duration-500 text-gray-600 hover:text-black'><a className='' href="/">Hand Pain</a></li>
                  </ul>
              </div>
              
          </div>
          <div className="item px-5 ">
              <div className="">
                  <h2 className='text-2xl font-medium'>Contact Us</h2>
                  <div className="bg-gray-700 w-20 h-[3px] rounded-r-full"></div>
                  <h2>phone number: 65334534653</h2>
                  <p>Address line 1, Address line 2, Hamilton, NY 08691</p>
                  <p>Language Assistance Available in:
Español, 中文, 한국어, Português, ગુજરાતી, Polskie,
Italiano, العربية, Việt, Français, اُردُو</p>
              </div>
              
          </div>
            </div>
            <div className="w-10/12 flex justify-between items-center mx-auto">
                <div className="social">
                    <ul className='flex gap-2'>
                        <li className='w-8 h-8 rounded-full border-2 border-black flex justify-center items-center'><a className='hover:text-black text-gray-500 w-fit duration-300' href="/"><FaFacebookSquare size={20} /></a></li>
                        <li className='w-8 h-8 rounded-full border-2 border-black flex justify-center items-center'><a className='hover:text-black text-gray-500 w-fit duration-300' href="/"><FaLinkedin size={20} /></a></li>
                        <li className='w-8 h-8 rounded-full border-2 border-black flex justify-center items-center'><a className='hover:text-black text-gray-500 w-fit duration-300' href="/"><FaSquareTwitter size={20} /></a></li>
                        <li className='w-8 h-8 rounded-full border-2 border-black flex justify-center items-center'><a className='hover:text-black text-gray-500 w-fit duration-300' href="/"><FaYoutubeSquare size={20} /></a></li>
                    </ul>
                </div>
                <p className='py-4 text-md text-gray-400 px-4'>Copyright all reserve By Toriqul Islam</p>
            </div>
           
      </div>
  )
}

export default Footer