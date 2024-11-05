import React from "react";

const NoActivity = () => {
  return (
    <>
      <section className="col-span-1 p-8 bg-gray-100 flex flex-col items-center text-gray-300 text-center">
        <div className="loader my-10"></div>
        <h1 className="text-gray-600 text-xl">No Timeline activity</h1>
        <p className="text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
          eveniet
        </p>
      </section>
    </>
  );
};

export default NoActivity;
