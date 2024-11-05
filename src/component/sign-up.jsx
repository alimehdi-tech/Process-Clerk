import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import bg_image from "../assets/images/laptop.png";
import { Link, useNavigate } from "react-router-dom";


import { IoPersonOutline } from "react-icons/io5";
import SignupSchema from "../validation/SignupSchema.jsx";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { signUp } from "../authentication/sign-up-auth.jsx";
import Phone from "../icons/Phone.jsx";
import Eyeopen from "../icons/eye-visible.jsx";
import Eyeclose from "../icons/eye-invisible.jsx";
import Message from "../icons/Message.jsx";
import Lock from "../icons/Lock.jsx";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignupSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
    if (data) {
      signUp(data.email, data.password, data.username, data.fullName, navigate);
    }
  };

  return (
    <main className="flex text-2xl">
      {/* Left Section */}
      <section className="flex  flex-col justify-center w-full lg:w-1/2 bg-white p-8 lg:p-32 space-y-8">
        <h1 className="text-4xl lg:absolute text-center top-10 left-10 font-semibold text-blue-600">
          Process Clerk
        </h1>
        <h2 className="text-5xl font-bold">Sign Up</h2>
        <p>
          If you already got an account,{" "}
          <Link to="/" className="text-blue-600 font-bold">
            login here!
          </Link>
        </p>

        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {/* FullName Input */}
          <article className="">
            <label htmlFor="fullName" className="text-lg font-medium">
              Full Name
            </label>
            <div className="mt-1 relative">
              <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                <MdOutlineDriveFileRenameOutline className="text-3xl text-gray-500" />
              </div>
              <input
                id="fullName"
                name="fullName"
                type="text"
                placeholder="Enter your full name"
                className={`w-full inputclass pl-7 border-b-2 border-gray-300 p-2 focus:outline-none focus:border-blue-600 ${
                  errors.fullName ? "border-red-500" : ""
                }`}
                {...register("fullName")}
              />
              {errors.fullName && (
                <p className="text-red-500 text-xs absolute italic mt-1">
                  {errors.fullName.message}
                </p>
              )}
            </div>
          </article>
          {/* Email Input */}
          <article>
            <label htmlFor="email" className="text-lg font-medium">
              Email
            </label>
            <div className="mt-1 relative">
              <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                <Message />
              </div>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email address"
                className={`w-full pl-7 inputclass border-b-2 border-gray-300 p-2 focus:outline-none focus:border-blue-600 ${
                  errors.email ? "border-red-500" : ""
                }`}
                {...register("email")}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1 italic absolute">
                  {errors.email.message}
                </p>
              )}
            </div>
          </article>

          {/* Username Input */}
          <article>
            <label htmlFor="username" className="text-lg font-medium">
              Username
            </label>
            <div className="mt-1 relative">
              <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                <IoPersonOutline />
              </div>
              <input
                id="username"
                name="username"
                type="text"
                placeholder="Enter your Username"
                className={`w-full pl-7 inputclass border-b-2 border-gray-300 p-2 focus:outline-none focus:border-blue-600 ${
                  errors.username ? "border-red-500" : ""
                }`}
                {...register("username")}
              />
              {errors.username && (
                <p className="text-red-500 text-xs italic mt-1 absolute">
                  {errors.username.message}
                </p>
              )}
            </div>
          </article>

          {/* Password Input */}
          <article>
            <label htmlFor="password" className="text-lg font-medium">
              Password
            </label>
            <div className="mt-1 relative">
              <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                <Lock />
              </div>
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className={`w-full pl-7 inputclass border-b-2 border-gray-300 p-2 focus:outline-none focus:border-blue-600 ${
                  errors.password ? "border-red-500" : ""
                }`}
                {...register("password")}
              />
              <span
                className="absolute right-0 top-4 text-gray-400 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <Eyeopen /> : <Eyeclose />}
              </span>
              {errors.password && (
                <p className="text-red-500 text-xs italic absolute mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>
          </article>

          {/* Register Button */}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-full hover:bg-blue-700 transition "
          >
            Sign Up
          </button>
        </form>
      </section>

      {/* Right Section */}
      <section className="hidden lg:flex lg:w-1/2 bg-special justify-around flex-col">
        <div className="flex items-center justify-end mr-12 gap-1">
          <Phone />
          <p className="text-2xl text-blue-700">+1 0123 456 789</p>
        </div>
        <img alt="Contract Image" src={bg_image} className="mx-auto " />
      </section>
    </main>
  );
};

export default SignUp;
