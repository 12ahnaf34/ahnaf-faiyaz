import React, { useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
//CSS
import { ContactFormContainer, FormItself, Input, InputButton, MessageInput } from "./ContactForm.styled";

//main function
export default function ContactForm(props) {
  const form = useRef();

  const [sender, setSender] = useState({ name: "", email: "", message: "" });

  const handleNameChange = (e) => {
    setSender({ ...sender, name: e.target.value });
  };
  const handleEmailChange = (e) => {
    setSender({ ...sender, email: e.target.value });
  };
  const handleMessageChange = (e) => {
    setSender({ ...sender, message: e.target.value });
  };

  const notify = () => {
    toast.error("Fields filled incorrectly!", {
      position: "bottom-center",
      theme: "dark",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const sendMessage = (e) => {
    e.preventDefault();

    if (sender.name.trim() === "" || sender.email.trim() === "" || sender.message.trim() === "") {
      notify();
      return;
    }
    emailjs
      .sendForm("service_ddbxbco", "template_t2akmky", form.current, "2bCya-JzlGI2RpmUU")
      .then((result) => {
        e.target.reset();
        toast.success("Email sent!", {
          position: "bottom-center",
          theme: "dark",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((err) => {
        console.log(err);
        toast.error("Unable to send email, try again!", {
          position: "bottom-center",
          theme: "dark",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  return (
    <ContactFormContainer>
      <FormItself ref={form} onSubmit={sendMessage}>
        <label loading="eager" htmlFor="name">
          Name
        </label>
        <Input id="name" type="text" onChange={handleNameChange} required name="user_name" />
        <label htmlFor="email">Email</label>
        <Input id="email" type="email" onChange={handleEmailChange} required name="user_email" />
        <label htmlFor="message">Message</label>
        <MessageInput id="message" type="text" onChange={handleMessageChange} required name="message" />
        <InputButton type="submit" value="Send" />
      </FormItself>

      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </ContactFormContainer>
  );
}
