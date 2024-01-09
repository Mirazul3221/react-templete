import React from 'react'
import Btn from '../Btn'
const Logo = () => {
    return <a href="/">
       <img className='w-40' src='./images/logo.png' alt="logo" />
   </a> 
}


const Header = () => {
  return (
      <div>
          <div className="flex justify-between items-center py-2">
              <Logo />
              <div className="">
                  <ul className='flex gap-5 font-[3px] items-center'>
                      <li className='group'><a className='group-hover:border-b border-black duration-300' href="/">Products</a></li>
                      <li><a href="/">Startup tools</a></li>
                      <li><a href="/">Featurs</a></li>
                      <li><a href="/">Life support</a></li>
                      <li><a href="/">Our plans</a></li>
                      <li><a href="/"><Btn btn={"Login"} /></a></li>
                  </ul>
              </div>
          </div>

    </div>
  )
}

export default Header