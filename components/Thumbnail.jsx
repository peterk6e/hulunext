import React from "react"
import Image from "next/image"

const Thumbnail = ({ movie }) => {
  const BASE_URL = 'https://image.tmdb.org/t/p/original'

  return (
    <div className=''>
      <Image
        layout='responsive'
        src={`${BASE_URL}${movie.poster_path}`}
        height={1080}
        width={1920}
      />
      <div className="p-2">
        <p className="truncate max-w-md">{movie.overview}</p>
      </div>
    </div>
  )
}

export default Thumbnail
