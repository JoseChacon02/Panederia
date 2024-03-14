import React from 'react'

export default function Image({src, alt}) {
  return (
    <img className="w-full h-96" src={src} alt={alt} />
  )
}
