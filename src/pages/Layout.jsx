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
    lg:text-center 
    lg:row-start-8
    lg:row-span-1
    lg:col-start-2
    lg:col-end-12
    lg:border-t-[1px]
    lg:border-zinc-700
    "
      >
        <NavLink to="/" className="h-full flex items-center ">
          <span className="mx-2">HOME</span>
        </NavLink>
        <NavLink to="/about" className=" h-full flex items-center">
          <span className="mx-2">ABOUT</span>
        </NavLink>
        <NavLink to="/portfolio" className="h-full flex items-center">
          <span className="mx-2">PORTFOLIO</span>
        </NavLink>
        <NavLink to="/contact" className=" h-full flex items-center">
          <span className="mx-2">CONTACT</span>
        </NavLink>

        <div className="ml-auto hidden lg:block">
          <a href="https://github.com/kbitsr" target="_blank" className="text-2xl hover:animate-lights">
            <i class="bx bxl-github"></i>
          </a>
          <a href="https://www.behance.net/richardkbits" target="_blank" className="text-2xl hover:animate-lights ml-4">
            <i class="bx bxl-behance"></i>
          </a>
          <a href="https://www.linkedin.com/in/richardkbits/" target="_blank" className="text-2xl hover:animate-lights ml-4">
            <i class="bx bxl-linkedin"></i>
          </a>
        </div>
      </nav>
    </>
  );
};
