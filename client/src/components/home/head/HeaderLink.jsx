import React from 'react'
import RedirectText from '../../RedirectText'

export default function HeaderLink({children}) {
  return (
    <li className='px-4 cursor-pointer'><RedirectText>{children}</RedirectText></li>
  )
}
