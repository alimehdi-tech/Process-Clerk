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

      
      
    </div>
  );
};

export default Media;
