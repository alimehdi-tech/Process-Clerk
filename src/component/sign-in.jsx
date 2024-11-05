import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import bg_image from "../assets/images/sign_in_bg.png";
import { Link } from "react-router-dom";
import { SigninSchema } from "../validation/SigninSchema.jsx";
import { signIn } from "../authentication/sign-in-auth.jsx";
import Media from "./shared/Media.jsx";
import Phone from "../icons/Phone.jsx";
import Eyeopen from "../icons/eye-visible.jsx";
import Eyeclose from "../icons/eye-invisible.jsx";
import Message from "../icons/Message.jsx";
import Lock from "../icons/Lock.jsx";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SigninSchema),
  });

  const onSubmit = (data) => {
    if (data) signIn(data.email, data.password);
  };

  return (
    <main className="flex text-2xl">
      {/* Left Section */}
      <section className="flex flex-col justify-center w-full lg:w-1/2 bg-white p-8 lg:p-32 space-y-8">
        <h1 className="text-4xl lg:absolute text-center top-10 left-10 font-semibold text-blue-600">
          Process Clerk
        </h1>
        <h2 className="text-5xl font-bold">Sign in</h2>
        <p>
          If you don’t have an account{" "}
          <Link to="/Signup" className="text-blue-600 font-bold">
            Register here!
          </Link>
        </p>

        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {/* Email Input */}
          <article>
            <label htmlFor="email" className="text-lg font-medium">
              Email
            </label>
            <div className="mt-1 relative">
              <div className="absolute inset-y-0 left-0 flex justify-center items-center pointer-events-none ">
                <Message />
              </div>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email address"
                className={`w-full inputclass pl-7 border-b-2 border-gray-300 p-2 focus:outline-none focus:ring-0 focus:border-b-2 focus:border-blue-600 ${
                  errors.email ? "border-red-500" : ""
                }`}
                {...register("email")}
              />
              {errors.email && (
                <p className="text-red-500 absolute text-xs italic mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
          </article>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="text-lg font-medium">
              Password
            </label>
            <div className="mt-1 relative">
              <div className="absolute inset-y-0 left-0 flex justify-center items-center pointer-events-none">
                <Lock />
              </div>
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className={`w-full inputclass pl-7 border-b-2 border-gray-300 p-2 focus:outline-none focus:ring-0 focus:border-b-2 focus:border-blue-600 ${
                  errors.password ? "border-red-500" : ""
                }`}
                {...register("password")}
              />
              {showPassword ? (
                <Eyeclose
                  className="absolute right-0 top-4 text-gray-400 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                />
              ) : (
                <Eyeopen
                  className="absolute right-0 top-4 text-gray-400 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                />
              )}
              {errors.password && (
                <p className="text-red-500 absolute text-xs italic mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>
          </div>

          <div className={`flex items-center justify-between `}>
            <div className="flex items-center">
              <input
                id="rememberMe"
                name="rememberMe"
                type="checkbox"
                className="h-4 w-4 border-gray-300 rounded"
                {...register("rememberMe")}
              />
              <label htmlFor="rememberMe" className="ml-2 block text-lg">
                Remember me
              </label>
            </div>

            <div>
              <Link
                to="forget-password"
                className="text-lg text-blue-600 hover:underline"
              >
                Forgot Password?
              </Link>
            </div>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-full hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>

        {/* Social Login */}
        <div className="text-center">
          <p className="font-bold text-gray-300">or continue with</p>
          <Media />
        </div>
      </section>

      {/* Right Section */}
      <div className="hidden lg:flex lg:w-1/2 bg-gray-50 justify-center items-center">
        <section className="space-y-6 text-center">
          <div className="flex items-center justify-end gap-1">
            <Phone />
            <p className="text-2xl text-right text-blue-700">+1 0123 456 789</p>
          </div>
          <img alt="Contract Image" src={bg_image} className="mx-auto" />
        </section>
      </div>
    </main>
  );
};

export default SignIn;
