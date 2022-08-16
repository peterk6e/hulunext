import React from "react"

const HeaderItem = ({ title, Icon }) => {
  return (
    <div className='group flex flex-col items-center cursor-pointer w-12 sm:w-20 border-2 border-red-500'>
      {Icon}
      <p className='opacity-20 group-hover:opacity-100 tracking-widest'>
        {title}
      </p>
    </div>
  )
}

export default HeaderItem
