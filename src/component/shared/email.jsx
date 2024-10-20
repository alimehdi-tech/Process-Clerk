import React from "react";
import emailjs from "emailjs-com";
import "react-toastify/dist/ReactToastify.css";
import {
  showErrorToast,
  showSuccessToast,
} from "../../authentication/toast/toastService";
import { useNavigate } from "react-router-dom";

const EmailForm = () => {
  const navigate = useNavigate();

  const sendEmail = (e) => {
    e.preventDefault();

    const userName = e.target.user_name.value;
    const userEmail = e.target.to_email.value;

    const message = `Hello ${userName},

We're excited to invite you to explore Process Clerk, the ultimate form builder app designed to streamline your workflow and enhance your productivity!

Key Features:
- User-Friendly Interface: Create forms with ease using our drag-and-drop builder.
- Customizable Templates: Choose from a variety of pre-designed templates or create your own from scratch.
- Real-Time Collaboration: Work with your team to create and edit forms simultaneously.
- Analytics and Reporting: Gain insights with built-in analytics tools to track responses and performance.
- Seamless Integrations: Connect with your favorite apps for a smoother experience.

Join Us Today!`;

    // Send the email
    emailjs
      .send(
        "service_z88mbvj",
        "template_nfl6hka",
        {
          from_name: userName,
          to_email: userEmail,
          message: message,
        },
        "XR5qX5LrS1vMQa7w5"
      )
      .then(
        (result) => {
          showSuccessToast("Email sent successfully!"); // Show success toast
          console.log(result.text);
        },
        (error) => {
          showErrorToast("Error sending email. Please try again."); // Show error toast
          console.error(error.text);
        }
      );
  };

  return (
    <main className="bg-black absolute w-screen h-screen bg-opacity-30 flex flex-col justify-center gap-5 items-center">
      <button className="inner-button" onClick={() => navigate("/Home")}>
        <span className="X"></span>
        <span className="Y"></span>
        <div className="close">Close</div>
      </button>

      <form className="email-invite ">
        <p className="uppercase">Invite your Friend</p>
        <div className="flex flex-col flex-grow m-10 gap-2 text-xl justify-center items-center">
          <input
            placeholder="Your friend's e-mail"
            className="email-input w-full"
            name="to_email"
            type="email"
            required
          />

          <input
            placeholder="Your Friend Name"
            className="email-input w-full"
            name="user_name"
            type="text"
            required
          />
        </div>
        <br />
        <button
          onClick={() => {
            sendEmail();
          }}
          type="submit"
          className="submit-btn"
        >
          SUBMIT
        </button>
      </form>
    </main>
  );
};

export default EmailForm;
