import React from "react";
import google from "../../assets/images/google.png";
import linkedin from "../../assets/images/linkedin.png";
import slack from "../../assets/images/slack.png";
import office from "../../assets/images/office.png";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";

const Media = () => {
  return (
    <div className="flex items-center justify-center mt-4">
      <Link to="#" className="flex items-center m-2">
        <FcGoogle className="text-5xl" />
        <p className="text-gray-500 text-sm">Google</p>
      </Link>

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
