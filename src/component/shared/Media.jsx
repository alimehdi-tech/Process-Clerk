import React from "react";

import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { signInWithGoogle } from "../../authentication/google-auth";

const Media = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center mt-4">
      <button
        onClick={() => signInWithGoogle(navigate)}
        to="#"
        className="flex items-center m-2"
      >
        <FcGoogle className="text-5xl" />
        <p className="text-gray-500 text-sm">Google</p>
      </button>

      <div className="flex items-center">
        <span className="w-0.5 h-8 bg-gray-300"></span>
      </div>

      <Link to="#" className="flex items-center m-2">
        <p className="text-blue-500 flex items-center text-lg p-2 font-extrabold">
          <FaFacebookSquare className="text-2xl " />
          acebook
        </p>
      </Link>

      <div className="flex items-center">
        <span className="w-0.5 h-8 bg-gray-300"></span>
      </div>

      <Link
        to="#"
        className="flex items-center linkedin m-2 text-2xl p-2 font-bold"
      >
        linked
        <FaLinkedin />
      </Link>
    </div>
  );
};

export default Media;
