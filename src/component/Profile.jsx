import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Person from "../icons/Person";

const Profile = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Function to handle form submission
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-10 rounded-lg shadow-lg max-w-4xl w-full space-y-8"
      >
        <div className="space-y-14">
          <div className="border-b border-gray-900/10 pb-14">
            <h2 className="text-3xl font-semibold leading-8 text-gray-900">
              Profile
            </h2>
            <p className="mt-2 text-md leading-7 text-gray-600">
              This information will be displayed publicly so be careful what you
              share.
            </p>

            <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-6">
              <div className="col-span-full">
                <label
                  htmlFor="about"
                  className="block text-xl font-medium leading-7 text-gray-900"
                >
                  About
                </label>
                <div className="mt-3">
                  <textarea
                    id="about"
                    {...register("about")}
                    rows="3"
                    className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    style={{
                      minHeight: "100px",
                      resize: "none",
                      fontSize: "1.25rem",
                    }} // Adjust styling as needed
                  />
                </div>
                <p className="mt-4 text-md leading-7 text-gray-600">
                  Write a few sentences about yourself.
                </p>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="photo"
                  className="block text-xl font-medium leading-7 text-gray-900"
                >
                  Photo
                </label>
                <div className="mt-3 flex items-center gap-x-4">
                  <Person/>
                  <button
                    type="button"
                    className="rounded-md bg-white px-3 py-2 text-xl font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  >
                    Change
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="border-b border-gray-900/10 pb-14">
            <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-xl font-medium leading-7 text-gray-900"
                >
                  First name
                </label>
                <div className="mt-3">
                  <input
                    type="text"
                    {...register("firstName")}
                    id="first-name"
                    autoComplete="given-name"
                    className="block text-xl w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-7"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="last-name"
                  className="block text-xl font-medium leading-7 text-gray-900"
                >
                  Last name
                </label>
                <div className="mt-3">
                  <input
                    type="text"
                    {...register("lastName")}
                    id="last-name"
                    autoComplete="family-name"
                    className="block text-xl w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-7"
                  />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label
                  htmlFor="email"
                  className="block text-xl font-medium leading-7 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-3">
                  <input
                    id="email"
                    {...register("email")}
                    type="email"
                    autoComplete="email"
                    className="block w-full text-xl  rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-7"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-end gap-x-8">
            <Link to="/Home">
              <button
                type="button"
                className="text-md font-semibold leading-7 text-gray-900"
              >
                Cancel
              </button>
            </Link>
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-4 py-3 text-md font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Profile;
