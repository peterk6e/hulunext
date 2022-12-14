import React from "react"
import requests from "../utils/requests"
import { useRouter } from "next/router"

const Nav = () => {
  const router = useRouter()

  return (
    <nav className='relative'>
      <div className='flex px-10 h-12 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll'>
        {Object.entries(requests).map(([key, { title, url }]) => (
          <p
            className='last:pr-24 cursor-pointer duration-200 transform hover:scale-125 hover:text-white active:text-orange-300'
            key={key}
            onClick={() => router.push(`/?genre=${key}`)}>
            {title}
          </p>
        ))}
      </div>
      <div className='absolute top-0 right-0 bg-gradient-to-l from-[#000333] h-12 w-1/12' />
    </nav>
  )
}

export default Nav
