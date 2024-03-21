import React from 'react'

export default function Image({src, alt, classname}) {
  return (
    <img className={`w-3/12 h-96 ${classname}`} src={src} alt={alt} />
  )
}
