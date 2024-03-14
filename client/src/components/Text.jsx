import React from 'react'

export default function Text({children, className}) {
  return (
    <p className={` tracking-wider text-neutral-500 ${className}`}>
        {children}
    </p>
  )
}
