import React from 'react'

export default function Title({type, children, className}) {
  if (type == 'h1'){
    return <h1 className="text-5xl  text-white leading-[5rem]">{children}</h1>
  }
  if (type == 'h2'){
    return <h2 className={`text-3xl  text-brown-500 tracking-wider ${className}`}>{children}</h2>
  }
  if (type == 'h3'){
    return <h3 className={`text-2xl  text-brown-500 tracking-wider ${className}`}>{children}</h3>
  }
  if (type == 'h4'){
    return <h4>{children}</h4>
  }
  if (type == 'h5'){
    return <h5>{children}</h5>
  }
  if (type == 'h6'){
    return <h6>{children}</h6>
  }
}
