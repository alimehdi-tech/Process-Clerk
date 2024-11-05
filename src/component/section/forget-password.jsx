import React, { useState } from "react";
import { Link } from "react-router-dom";
import Message from "../../icons/Message";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the submit logic here
    console.log("Email submitted:", email);
  };

  return (
    <main className="min-h-screen flex flex-col bg-white">
      {/* Upper section pinned at the top */}
      <section className="w-full flex items-center justify-between p-6">
        <h1 className="text-xl font-semibold text-black">Process Clerk</h1>
        <Link to="/">
          <button className="bg-blue-600 text-white py-3 px-6 rounded-full hover:bg-blue-700 transition">
            Sign in
          </button>
        </Link>
      </section>

      {/* Lower section centered */}
      <section className="flex-grow flex items-center justify-center">
        <div className="bg-white rounded-xl shadow-md p-8 max-w-md w-full">
          <h2 className="text-2xl font-semibold text-gray-800 text-center">
            Forgot Password{" "}
            <span role="img" aria-label="thinking">
              🤔
            </span>
          </h2>
          <p className="text-center text-gray-400 mt-2 mb-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="sr-only" htmlFor="email">
                Email address
              </label>
              <div className="relative">
                <input
                  id="email"
                  type="email"
                  placeholder="ali123@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 pl-10 text-gray-700 bg-gray-100 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <span className="absolute inset-y-0 left-3 flex items-center">
                  <Message/>
                </span>
              </div>
            </div>
            <Link to="/check-email">
              <button
                type="submit"
                className="w-full py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                Send Email
              </button>
            </Link>
          </form>
        </div>
      </section>
    </main>
  );
};

export default ForgotPassword;
