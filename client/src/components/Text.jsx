import React from 'react'

export default function Text({children, className}) {
  return (
    <p className={`tracking-wide ${className}`}>
        {children}
    </p>
  )
}
