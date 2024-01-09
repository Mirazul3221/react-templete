import React from 'react'

const Btn = ({btn="btn", px = 6,py='[2px]',bg='black',color='white' , text='md',font="thin" }) => {
  return (
      <div className={`px-${px} py-${py} bg-${bg} text-${color} text-${text} font-${font} rounded-md w-fit`}>
          {btn}
    </div>
  )
}

export default Btn