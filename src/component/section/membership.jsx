import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { BiGridSmall } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import Tick from "../../icons/tick";

const Membership = () => {
  const navigate = useNavigate();
  return (
    <main className="flex justify-center mt-32 gap-5 text-2xl">
      <button
        onClick={() => navigate("/Home")}
        className="Member-button absolute top-48 left-10 z-10"
      >
        <BiGridSmall className="icon" />

        <span className="text uppercase">Home</span>
      </button>
      <section className="plan ">
        <div className="inner">
          <span className="pricing">
            <span>
              $19 <small>/ m</small>
            </span>
          </span>
          <h1 className="text-3xl font-bold text-black">Basic</h1>
          <p className="text-lg my-8">
            This plan is mostly for individuals or smaller teams starting out.
          </p>
          <ul className="features">
            <li>
              <span className="icon">
                <Tick />
              </span>
              <span>
                <strong>5</strong> team members
              </span>
            </li>
            <li>
              <span className="icon">
                <Tick />
              </span>
              <span>
                Plan <strong>team meetings</strong>
              </span>
            </li>
            <li>
              <span className="icon">
                <Tick />
              </span>
              <span>File sharing</span>
            </li>
          </ul>
          <div className="action">
            <a className="button" href="#">
              Choose plan
            </a>
          </div>
        </div>
      </section>
      <section className="plan">
        <div className="inner">
          <span className="pricing">
            <span>
              $49 <small>/ m</small>
            </span>
          </span>
          <h1 className="text-3xl font-bold text-black">Professional</h1>
          <p className="text-lg my-8 ">
            This plan is for those who have a team already and running a large
            business.
          </p>
          <ul className="features">
            <li>
              <span className="icon">
                <Tick />
              </span>
              <span>
                <strong>20</strong> team members
              </span>
            </li>
            <li>
              <span className="icon">
                <Tick />
              </span>
              <span>
                Plan <strong>team meetings</strong>
              </span>
            </li>
            <li>
              <span className="icon">
                <Tick />
              </span>
              <span>File sharing</span>
            </li>
          </ul>
          <div className="action">
            <a className="button" href="#">
              Choose plan
            </a>
          </div>
        </div>
      </section>

      <article className="absolute top-0 left-0">
        <section className="rounded-br-full bg-green-500 p-5">
          <div className="flex flex-col gap-6 ">
            <div>
              <span className="text-gray-200 ml-2">Black friday sale</span>
              <br />
              <span className="text-gray-200 text-4xl  font-semibold">
                20% off every Product
              </span>
            </div>
            <button className="text-green-600 uppercase bg-white hover:bg-gray-50 px-4 py-2 rounded-lg w-fit ease duration-300 flex gap-1 items-center group ">
              <span>Buy now</span>
              <FaLongArrowAltRight />
            </button>
          </div>
        </section>
      </article>
    </main>
  );
};

export default Membership;
