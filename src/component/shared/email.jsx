import React from "react";
import emailjs from "emailjs-com";
import { TiUserOutline } from "react-icons/ti";
import { HiOutlineMail } from "react-icons/hi";
import "react-toastify/dist/ReactToastify.css";
import {
  showErrorToast,
  showSuccessToast,
} from "../../authentication/toast/toastService";

const EmailForm = () => {
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

Join Us Today!
`;

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
    <main className="bg-black h-screen bg-opacity-10 flex flex-col justify-center gap-5 items-center">
      <button class="inner-button">
        <span class="X"></span>
        <span class="Y"></span>
        <div class="close">Close</div>
      </button>

      <form className="email-invite bg" onSubmit={sendEmail}>
        <p id="heading">Send invitation to your Friend</p>
        <div className="field">
          <TiUserOutline className="input-icon" />
          <input
            autoComplete="off"
            placeholder="Your Friend Name"
            className="input-field"
            type="text"
            name="user_name"
            required
          />
        </div>
        <div className="field">
          <HiOutlineMail className="ml-1" />
          <input
            placeholder="Your Friend Email"
            className="input-field"
            type="email"
            name="to_email"
            required
          />
        </div>
        <div className="btn-main">
          <button className="button-main" type="submit">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Send
            it&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </button>
        </div>
      </form>
    </main>
  );
};

export default EmailForm;
