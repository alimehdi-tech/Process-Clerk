import React, { useState } from "react";
import { MdUpload } from "react-icons/md";
import { ArrowDownIcon } from "../../icons/arrowdown";

const DropdownButton = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSelectOption = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div className="relative">
      <button
        className="bg-blue-700 flex items-center gap-2 text-white p-6 py-4 rounded-full shadow-md"
        onMouseEnter={() => setIsDropdownOpen(true)}
        onMouseLeave={() => setIsDropdownOpen(false)}
      >
        Add Document
        <ArrowDownIcon />
      </button>

      {isDropdownOpen && (
        <ul
          className="absolute left-4  w-48 bg-white rounded-xl shadow-md z-10   border border-gray-300 z-transition-opacity duration-300 ease-out transform opacity-100 scale-100"
          onMouseEnter={() => setIsDropdownOpen(true)} // Keep dropdown open while hovering
          onMouseLeave={() => setIsDropdownOpen(false)} // Close when the mouse leaves the dropdown
        >
          <li
            className="p-2 px-4 flex gap-1 capitalize items-center hover:text-blue-700 cursor-pointer"
            onClick={handleSelectOption}
          >
            <MdUpload className="text-3xl" />
            bulk upload
          </li>{" "}
          <li
            className="p-2 px-4 flex gap-1 border-t-black border-2 capitalize items-center hover:text-blue-700 cursor-pointer"
            onClick={handleSelectOption}
          >
            <MdUpload className="text-3xl" />
            upload
          </li>
        </ul>
      )}
    </div>
  );
};

export default DropdownButton;
