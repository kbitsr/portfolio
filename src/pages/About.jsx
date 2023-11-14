import React from "react";
import { NavLink } from "react-router-dom";

export const About = () => {
  return (
    <section className="animate__animated animate__slideInRight animate__faster">
      
      <div
        className="
    row-start-2
    col-start-3
    row-span-5
    col-span-3
    transition-transform
    bg-profile
    bg-cover
    bg-center
    rounded-xl
    "></div>

    <div
        className="
    border-red-400
    row-start-2
    col-start-7
    row-span-5
    col-span-5
    text-center
    flex
    flex-col
    justify-between
    ">
        <h2>About <span className="text-teal-300">me</span></h2>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
          voluptatum quibusdam illum distinctio ea exercitationem natus itaque
          eius aliquam soluta aliquid voluptatem vitae assumenda at unde
          laborum. Magni, ipsam officiis.
        </p>
        <div className=" self-center text-sm">
          <p><i class='bx bxs-map'></i> Quito / Ecuador</p>
          <p><i class='bx bxs-envelope' ></i> richard666cr@gmail.com</p>
          <p><i class='bx bxs-phone' ></i> +593 998 765 322</p>
        </div>
        <a className="btn self-center"><i class='bx bxs-file-blank'></i>DOWNLOAD CV</a>
      </div>
      <NavLink className="row-start-7 row-span-1 col-start-7 col-span-1 text-center self-center"><i class='bx bxs-chevron-up-circle animate-lights text-4xl'></i></NavLink>
    </section>
  );
};
