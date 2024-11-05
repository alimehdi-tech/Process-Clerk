import { useForm } from "react-hook-form";
import Sidebar from "./shared/Navbar";
import Topbar from "./shared/Topbar";
import box from "../assets/images/box.png";
import dropbox from "../assets/images/dropbox.png";
import upload from "../assets/images/upload.png";
import drive from "../assets/images/drive.png";
import { useState } from "react";
import NoActivity from "./section/no-activity";
import InnerBar from "./section/inner-bar";
import { Outlet, useNavigate } from "react-router-dom";
import LogOutButton from "../authentication/Logout";

function Home() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const [noData, setNoData] = useState(false); // Fixed casing for consistency
  const [selectedFileName, setSelectedFileName] = useState(''); // State to keep track of selected file name

  const onSubmit = (data) => {
    // You can handle form submission here if needed
  };

  const handleFileChange = (e) => {
    const fileList = e.target.files;
    if (fileList && fileList.length > 0) {
      const selectedFile = fileList[0]; // Get the file object
      setSelectedFileName(selectedFile.name); // Set the file name for display
      navigate('/Home/upload', { state: { file: selectedFile } }); // Pass the file object to Upload page
    }
  };

  return (
    <main className="flex flex-col max-h-screen">
      <Topbar />
      <article className="grid grid-rows-1 grid-cols-5 h-screen overflow-hidden">
        <div className="col-span-1">
          <Sidebar />
        </div>
        <section className="col-span-3 p-8 bg-gray-100 h-full flex flex-col">
          <InnerBar />
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white text-xl shadow-black shadow-sm rounded-sm p-8 text-center flex flex-col flex-grow justify-center items-center"
          >
            <div className="mb-4">
              <h1 className="text-black font-bold">Drag and drop your file here</h1>
              <p className="text-gray-400">Supported files are png, pdf, powerpoint</p>
              {selectedFileName && (
                <p className="mt-2 text-gray-600">Selected File: {selectedFileName}</p>
              )}
            </div>
            <input
              type="file"
              {...register("file")}
              className="mb-4 hidden"
              id="fileInput"
              onChange={handleFileChange} // Handle file selection
            />
            <button
              type="button"
              onClick={() => document.getElementById("fileInput").click()}
              className="bg-green-500 text-white px-4 py-2 rounded-full mb-4"
            >
              Select File
            </button>
          </form>

          <article className="flex gap-12 justify-center m-12">
            <img
              src={upload}
              onClick={() => document.getElementById("fileInput").click()}
              className="w-8 cursor-pointer"
              alt="Upload"
            />
            <img src={drive} className="w-8 cursor-pointer" alt="Drive" />
            <img src={dropbox} className="w-8 cursor-pointer" alt="Dropbox" />
            <img src={box} className="w-8 cursor-pointer" alt="Box" />
          </article>
        </section>
        <NoActivity />
      </article>
      <Outlet name="invite"/>
      <Outlet name="upload"/>
      <LogOutButton />
    </main>
  );
}

export default Home;
