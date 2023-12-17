import React from "react";

export const Contact = () => {
  return (
    <section className="border gap-x-4">
      <div
        className="
        row-start-2
      col-start-2
      col-span-5
      row-span-5
      border"
      >
        <h2>
          Contact <span className="text-teal-500">Me</span>
        </h2>
      </div>

      <form
        className="row-start-2
      col-start-8
      col-span-4
      row-span-5
      flex flex-col
      justify-evenly"
      >
        <input type="text" placeholder="Name" className="input" />
        <input type="email" placeholder="E-mail" className="input"/>
        <textarea name="msg" placeholder="Type a message" className="input resize-none"></textarea>
        <input type="submit" value="Enviar" className="btn" />
      </form>
    </section>
  );
};
