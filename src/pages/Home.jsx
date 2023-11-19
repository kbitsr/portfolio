import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <section className="animate__animated animate__slideInLeft animate__faster">
      <h1
        className="
      row-start-3
      row-span-1
      col-span-full
      self-center
      text-center
      text-4xl
      lg:row-start-2
      lg:col-start-3
      lg:col-span-3
      "
      >
        I'm Richard Kbits
      </h1>
      <h2
        className="
      row-start-4
      col-span-full
      text-center
      self-center
      font-light
      text-xl
      lg:text-sm
      lg:self-start
      lg:row-start-3
      lg:col-start-5
      lg:col-span-2
      "
      >
        WEB DESIGN & DEVELOPMENT
      </h2>
      <h3
        className="hello
      row-start-1
      row-span-2
      col-span-full
      text-center
      font-bold
      text-9xl
      self-center
      lg:self-end
      lg:row-start-2
      lg:col-start-3
      lg:col-span-8
      lg:row-span-4
      lg:text-[280px]
      lg:tracking-[2rem]
      animate-lights
      delay-1000
      ">
        He<span className="animate-lights">llo</span>
      </h3>

      <Link className="btn
      row-start-5
      col-start-2
      col-span-2
      row-span-2
      self-center
      lg:row-start-6
      lg:col-start-6
      " to="/about">ABOUT ME</Link>
    </section>
  );
};
