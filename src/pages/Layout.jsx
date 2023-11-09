import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
<>

<section>
  <Outlet/>
</section>
<nav className='
    lg:row-start-8
    lg:row-span-1
    lg:col-start-1
    lg:col-span-full'>
        <NavLink to="/">HOME</NavLink>
        <NavLink to="about">ABOUT</NavLink>
        <NavLink to="portfolio">PORTFOLIO</NavLink>
        <NavLink to="contact">CONTACT</NavLink>
    </nav>

</>
  )
}
