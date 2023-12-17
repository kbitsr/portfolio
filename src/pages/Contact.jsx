import React from "react";

export const Contact = () => {
  return (
    <section className="border gap-x-4">
      <div
        className="
        row-start-2
      col-start-2
      col-span-4
      row-span-5
      border"
      >
        <h2>
          Contact <span className="text-teal-500">Us</span>
        </h2>
      </div>

      <form className="row-start-2
      col-start-8
      col-span-4
      row-span-5
      flex flex-col
      justify-evenly">
        <input
          type="text"
          placeholder="Name"
          className=" transition
          bg-transparent
          focus:outline-none
          text-teal-400
          outline-none
          border-b-[1px]
          border-gray-600
          focus:border-teal-400
          h-12
          placeholder:text-gray-600
          active:border-s-teal-500
          "
        />
        <input type="email" placeholder="E-mail" />
        <textarea name="msg" placeholder="Type a message"></textarea>
        <input type="submit" value="Enviar" className="btn " />
      </form>
    </section>
  );
};
