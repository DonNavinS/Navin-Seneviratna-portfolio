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
    <form ref={form} onSubmit={sendEmail}>
      <input type="text" name="from_name" placeholder="Name" />
      <input type="text" name="from_email" placeholder="Email" />
      <textarea
        name="message"
        cols="30"
        rows="10"
        className="border-2 border-black"
      />
      <input type="submit" value="Send" className="border-2 border-black" />
    </form>
  );
}

export default Contact;
