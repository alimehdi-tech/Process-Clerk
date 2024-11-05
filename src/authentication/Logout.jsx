import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../Firebase";
import { showSuccessToast, showErrorToast } from "./toast/toastService";
import { useNavigate } from "react-router-dom";

const LogOutButton = () => {
  const navigate = useNavigate();

  const logout = () => {
    signOut(auth)
      .then(() => {
        showSuccessToast("Successfully logged out!");
        navigate("/"); // Redirect to the login page after logout
      })
      .catch((error) => {
        showErrorToast("Error logging out: " + error.message);
      });
  };

  return (
    <>
      <style>
        {`
      
  .Btn {
    --primary-blue: #2563eb;
    --light-blue: #3b82f6;
    --lighter-blue: #60a5fa;
    --dark-blue: #1d4ed8;
    --white: #ffffff;
    --blue-50: #eff6ff;
    --blue-100: #dbeafe;

    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 90px;
    height: 90px;
    border: none;
    border-radius: 100%;
    cursor: pointer;
    transition-duration: .3s;
   
    background-color: var(--primary-blue); /* Blue background */
  }

  .sign {
    width: 100%;
    transition-duration: .3s;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .sign svg {
    width: 32px;
  }

  .sign svg path {
    fill: var(--white); /* White logo */
  }

  .text {
    position: absolute;
    right: 0%;
    width: 0%;
    opacity: 0;
    color: var(--white); /* White text */
    font-size: 1.8em;
    font-weight: 600;
    transition-duration: .3s;
  }

  .Btn:hover {
    width: 180px;
    border-radius: 10px;
    transition-duration: .3s;
    background-color: var(--primary-blue); /* Light blue on hover */
  }

  .Btn:hover .sign {
    width: 30%;
    transition-duration: .3s;
    padding-left: 20px;
  }

  .Btn:hover .text {
    opacity: 1;
    width: 70%;
    transition-duration: .3s;
    padding-right: 10px;
  }

  .Btn:active {
    transform: translate(2px, 2px);
    background-color: var(--primary-blue); /* Lighter blue on click */
  }

  .Btn:active .text,
  .Btn:active .sign svg path {
    color: var(--white); /* White text and logo on click */
    fill: var(--white);
  }


    `}
      </style>
      <button
        className="Btn absolute bottom-10 left-10 shadow-md shadow-black"
        onClick={logout}
      >
        <div className="sign">
          <svg viewBox="0 0 512 512">
            <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
          </svg>
        </div>
        <div className="text">Logout</div>
      </button>
    </>
  );
};

export default LogOutButton;
