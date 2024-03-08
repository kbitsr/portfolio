import React from "react";
import { NavLink } from "react-router-dom";

export const Profile = () => {
  return (
    <>
      <div className="row-start-1 row-span-2 col-span-full col-start-1 lg:row-start-2 lg:col-start-2 lg:row-span-5 lg:col-span-6 bg-profile bg-cover bg-center lg:rounded-xl relative group">
        <p className=" hidden absolute rounded-xl inset-0 group-hover:-translate-x-4 transition group-hover:-translate-y-4 group-hover:bg-teal-600 bg-teal-600/25 group-hover:-z-10 lg:block"></p>
      </div>

      <div className=" border-red-400 row-start-3 row-span-3 col-start-1 col-span-full lg:row-start-2 lg:col-start-8 lg:row-span-5 lg:col-span-4 flex flex-col justify-between ml-6 border font-light">
        <h2>
          About <span>me</span>
        </h2>

        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
          voluptatum quibusdam illum distinctio ea exercitationem natus itaque
          eius aliquam soluta aliquid voluptatem vitae assumenda at unde
          laborum. Magni, ipsam officiis.
        </p>

        <div className="space-y-2 text-center">
          <p>
            <i class="bx bxs-map"></i> Quito | Ecuador
          </p>
          <p>
            <i class="bx bxs-envelope"></i> richard.higue@gmail.com
          </p>
          <p>
            <i class="bx bxs-phone"></i> +593 998 765 322
          </p>
        </div>

        <a className="btn self-center">
          <i class="bx bxs-file-blank"></i>DOWNLOAD CV
        </a>
        
      </div>

      <NavLink
        className=" col-start-2 col-span-2 row-start-6 lg:row-span-1 lg:row-start-7 lg:col-start-6 text-center self-center"
        to="/about/skill"
      >
        <i class="bx bxs-chevron-up-circle  animate-lights text-4xl"></i>
      </NavLink>
    </>
  );
};
