import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { sendEmailVerification } from "firebase/auth";

import { auth } from "../../Firebase";
import {
  showErrorToast,
  showSuccessToast,
} from "../../authentication/toast/toastService";

const MailComponent = () => {
  const [isVerified, setIsVerified] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // React Router's useNavigate hook to navigate programmatically

  useEffect(() => {
    const checkEmailVerified = () => {
      const user = auth.currentUser;

      if (user) {
        user
          .reload()
          .then(() => {
            if (user.emailVerified) {
              setIsVerified(true);
              showSuccessToast("Email verified successfully!"); // Show success toast
              navigate("/Home"); // Navigate to /Home after verification
            } else {
              setIsVerified(false);
            }
            setLoading(false);
          })
          .catch((error) => {
            showErrorToast("Error checking verification: " + error.message);
          });
      }
    };

    // Interval to check the verification status every 5 seconds
    const interval = setInterval(checkEmailVerified, 5000);

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, [navigate]); // Include navigate in dependency array

  const resendVerificationEmail = () => {
    const user = auth.currentUser;
    if (user) {
      sendEmailVerification(user)
        .then(() => {
          showSuccessToast("Verification email sent successfully.");
        })
        .catch((error) => {
          showErrorToast("Error sending verification email: " + error.message);
        });
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white">
      <section className="w-full flex items-center justify-between p-6">
        <h1 className="text-xl font-semibold text-black">Process Clerk</h1>
        <Link to="/">
          <button className="bg-blue-600 text-white py-3 px-6 rounded-full hover:bg-blue-700 transition">
            Sign in
          </button>
        </Link>
      </section>
      <section className="flex-grow flex justify-center items-center">
        <div className="bg-white p-10 rounded-xl shadow-lg text-center max-w-md w-full">
          {isVerified ? (
            <>
              <h1 className="text-2xl font-bold">
                Your email is verified!{" "}
                <span role="img" aria-label="smile">
                  🎉
                </span>
              </h1>
              <p className="text-gray-500 mt-2">Redirecting to Home...</p>
            </>
          ) : (
            <>
              <h1 className="text-2xl font-bold">
                You've got mail{" "}
                <span role="img" aria-label="smile">
                  😊
                </span>
              </h1>
              <p className="text-gray-500 mt-2">
                Please verify your email. If you haven't received the
                verification email, click the button below to resend it.
              </p>
              <button
                className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                onClick={resendVerificationEmail}
              >
                Resend mail 
              </button>
            </>
          )}
        </div>
      </section>
    </main>
  );
};

export default MailComponent;
