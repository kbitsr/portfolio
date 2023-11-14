import React from "react";
import { NavLink, Outlet } from "react-router-dom";


export const Layout = () => {
  return (
    <>
      <Outlet />
      <nav
        className="
    flex
    gap-x-4
    items-center
    row-start-7
    col-span-full
    lg:text-center border
    lg:row-start-8
    lg:row-span-1
    lg:col-start-2
    lg:col-end-12
    "
      >
        <NavLink to="/">HOME</NavLink>
        <NavLink to="about">ABOUT</NavLink>
        <NavLink to="portfolio">PORTFOLIO</NavLink>
        <NavLink to="contact">CONTACT</NavLink>
      </nav>
    </>
  );
};
