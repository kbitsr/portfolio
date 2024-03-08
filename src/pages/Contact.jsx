import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_my7xdem",
        "template_xzrqbfe",
        form.current,
        "Jbl9_K5vgObykjWEx"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="gap-x-4 animate__animated animate__slideInRight animate__faster">
      <div className=" col-start-1 col-span-full row-start-1 row-span-2 lg:row-start-2 lg:col-start-2 lg:col-span-5 lg:row-span-5 bg-map bg-cover bg-center lg:rounded-3xl"></div>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col justify-between col-start-1 col-span-full row-span-4 lg:row-start-2 lg:col-start-8 lg:col-span-4 lg:row-span-5"
      >
        <h2>
          Contact <span className="text-teal-500">Me</span>
        </h2>
        <input
          type="text"
          name="user_name"
          placeholder="Name"
          className="input"
        />
        <input
          type="email"
          name="user_email"
          placeholder="Email"
          className="input"
        />
        <textarea
          name="message"
          placeholder="Type a message"
          className="input resize-none"
        ></textarea>
        <input type="submit" value="Send" className="btn self-center" />
      </form>
    </section>
  );
};
