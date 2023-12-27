import React from "react";
import { NavLink, Outlet, Route } from "react-router-dom";

import { useLocation } from 'react-router-dom'

export const AboutIndex = () => {
  const location=useLocation()
  const path1=location.pathname==='/about/skill'
  const path2=location.pathname==='/about/education'
  return (
    <section className="animate__animated animate__slideInRight animate__faster">
      
    {path1||path2?<div className="flex justify-center gap-x-4 items-center lg:col-start-6 lg:col-span-2 col-span-full">
      <NavLink to="/about/skill" className="border-none">Skills</NavLink>
      <NavLink to="/about/education" className="border-none">Education</NavLink>
    </div>:null}

      <Outlet />
      
    </section>
  );
};
