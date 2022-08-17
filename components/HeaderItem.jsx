import React from "react"

const HeaderItem = ({ title, Icon }) => {
  return (
    <div className='group flex flex-col items-center cursor-pointerhover:text-white w-12 sm:w-20'>
      <div className="group-hover:animate-bounce">{Icon}</div>
      <p className='opacity-30 group-hover:opacity-100 tracking-widest'>
        {title}
      </p>
    </div>
  )
}

export default HeaderItem
