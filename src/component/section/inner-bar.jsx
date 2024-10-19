import React from "react";
import { GoPencil } from "react-icons/go";
import { MdOutlinePersonOutline } from "react-icons/md";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { IoIosInformationCircleOutline } from "react-icons/io";
const InnerBar = () => {
  return (
    <>
      <section className="grid grid-cols-4 gap-4 mb-8 text-xl ">
        <div className="p-6 py-12 shadow-black shadow-sm flex  items-center flex-row gap-3 bg-white rounded-lg Animated-btn">
          <GoPencil className="text-4xl" />
          <div>
            <p className="font-semibold">Draft</p>
            <p className="text-gray-400">0 Document</p>
          </div>
        </div>
        <div className="p-6 py-12 shadow-black shadow-sm flex  items-center flex-row gap-3 bg-white rounded-lg Animated-btn">
          <IoIosInformationCircleOutline className="text-5xl" />
          <div>
            <p className="font-semibold">Actions required</p>
            <p className="text-gray-400">0 Document</p>
          </div>
        </div>
        <div className="p-6 py-12 shadow-black shadow-sm flex  items-center flex-row gap-3 bg-white rounded-lg Animated-btn">
          <MdOutlinePersonOutline className="text-5xl " />
          <div>
            <p className="font-semibold">Waiting for others</p>
            <p className="text-gray-400">0 Document</p>
          </div>
        </div>
        <div className="p-6 py-12 shadow-black shadow-sm flex  items-center flex-row gap-3 bg-white rounded-lg Animated-btn">
          <IoCheckmarkDoneCircle className="text-5xl" />
          <div>
            <p className="font-semibold">Finalized</p>
            <p className="text-gray-400">0 Document</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default InnerBar;
