import React from 'react'
import Btn from './Btn'

const Section1 = () => {
  return (
      <div className='py-10 bg-[#f1f1f1] flex justify-between items-center text-justify text-lg px-10'>
          <div className="left w-1/2">
              <img className='w-[80%]' src="/images/health.png" alt="" />
          </div>
          <div className="right w-1/2">
              <h2 className='text-3xl font-bold mb-3'>Create great performing templates</h2>
              <p className='text-gray-700'>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique excepturi dolorum non eum. Nostrum veritatis numquam dolorum doloribus est illum odio obcaecati voluptatem nemo id praesentium recusandae, non reiciendis maxime.
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique excepturi dolorum non eum. Nostrum veritatis numquam dolorum doloribus est illum odio obcaecati voluptatem nemo id praesentium recusandae,              </p>
              <div className="mt-2"> <a href="#"><Btn btn={"Read More..."} /></a></div>
          </div>
    </div>
  )
}

export default Section1