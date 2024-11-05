import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { IoCloseOutline } from 'react-icons/io5';
import { Link, useLocation } from 'react-router-dom';

export default function Upload() {
  const [fileName, setFileName] = useState('');
  const { register, handleSubmit, setValue } = useForm();
  const location = useLocation(); // Use useLocation to access passed state
  const file = location.state?.file; // Get the file from location state

  useEffect(() => {
    if (file) {
      setFileName(file.name); // Set the file name for display
      setValue("file", file); // Set the file value in react-hook-form
    }
  }, [file, setValue]);

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    setFileName(file ? file.name : '');
  };

  const onSubmit = (data) => {
    console.log(data);
    // Handle the file upload logic here
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-800">Upload File</h2>
            <Link to={"/home"}>
              <button className="text-gray-400 hover:text-gray-600">
                <IoCloseOutline className="text-4xl" />
              </button>
            </Link>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="relative">
              <input
                type="text"
                className="w-full py-2 px-3 border-b border-gray-300 bg-transparent placeholder-gray-500 text-gray-900 focus:outline-none focus:border-blue-500"
                placeholder="Select file"
                value={fileName}
                readOnly
              />
              <input
                type="file"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                onChange={handleFileChange}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </div>

            <input
              type="text"
              className="w-full py-2 px-3 border-b border-gray-300 bg-transparent placeholder-gray-500 text-gray-900 focus:outline-none focus:border-blue-500"
              placeholder="Enter name"
              {...register("name")}
            />

            <input
              type="text"
              className="w-full py-2 px-3 border-b border-gray-300 bg-transparent placeholder-gray-500 text-gray-900 focus:outline-none focus:border-blue-500"
              placeholder="Enter recipients"
              {...register("recipients")}
            />

            <input
              type="text"
              className="w-full py-2 px-3 border-b border-gray-300 bg-transparent placeholder-gray-500 text-gray-900 focus:outline-none focus:border-blue-500"
              placeholder="Enter value"
              {...register("value")}
            />
          </form>
        </div>

        <div className="border-t p-4 flex justify-end space-x-2">
          <Link to="/home">
            <button className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors">
              Cancel
            </button>
          </Link>
          <button 
            type="submit" 
            onClick={handleSubmit(onSubmit)} 
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
          >
            Upload
          </button>
        </div>

        <div className="border-t p-4 flex justify-center space-x-4">
          {['download', 'drive', 'dropbox', 'box'].map((icon, index) => (
            <img key={index} src={`/placeholder.svg?height=24&width=24`} alt={icon} className="h-6 w-6" />
          ))}
        </div>
      </div>
    </div>
  );
}
