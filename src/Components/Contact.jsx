import React, { useRef } from "react";
import emailjs, { init, send } from "@emailjs/browser";
init("user_UC3rhqJHC4MA5dqCjw4m7");

function Contact() {
  const form = useRef();

  const sendEmail = () => {
    emailjs
      .sendForm(
        "service_0ic8i6w",
        "template_u3q8vyj",
        form.current,
        "user_UC3rhqJHC4MA5dqCjw4m7"
      )
      .then(
        (result) => {
          console.log(result);
        },
        (error) => {
          console.log(error);
        }
      );
  };
  return (
    <div
      id="contact"
      className=" h-screen flex flex-col justify-center items-center "
    >
      <h1 className="text-5xl">Contact Me !</h1>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col justify-center items-center gap-4 mb-64"
      >
        <input
          type="text"
          name="from_name"
          placeholder="Name"
          className="rounded bg-white bg-opacity-90 border-2 border-black p-1 mt-6"
        />
        <input
          type="email"
          name="from_email"
          placeholder="Email"
          className="rounded bg-white bg-opacity-90 border-2 border-black p-1"
        />
        <textarea
          name="message"
          placeholder="Message"
          className="rounded bg-white bg-opacity-90 border-2 border-black h-24 w-96 p-1 text-lg"
        />
        <input
          type="submit"
          value="Send"
          className="rounded border-2 border-black p-1 hover:scale-110 transition duration-200 hover:bg-white hover:bg-opacity-90"
        />
      </form>
    </div>
  );
}

export default Contact;
