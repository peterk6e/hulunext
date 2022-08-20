import React from "react"
import requests from "../utils/requests"

const Nav = () => {
  return (
    <nav>
      <div className='flex px-10 h-12 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll'>
        {Object.entries(requests).map(([key, { title, url }]) => (
          <p className="last:pr-24 cursor-pointer duration-200 transform hover:scale-125 hover:text-white active:text-orange-300" key={key}>{title}</p>
        ))}
      </div>
    </nav>
  )
}

export default Nav
