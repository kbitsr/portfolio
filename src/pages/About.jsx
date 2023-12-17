import React from "react";
import { Outlet } from "react-router-dom";

export const About = () => {
  return (
    <section className="animate__animated animate__slideInRight animate__faster border">
      <Outlet />
    </section>
  );
};
