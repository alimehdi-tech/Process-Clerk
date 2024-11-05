import React, { useEffect, useState } from "react";
import { Edit2 } from "lucide-react";
import { getDatabase, ref, onValue } from "firebase/database";
import { auth } from "../../Firebase";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const GlowProfile = () => {
  const Navigate = useNavigate();
  const [userData, setUserData] = useState({
    username: "",
    fullName: "",
    profileURL: "",
    Role: "",
    description: "",
  });

  useEffect(() => {
    const db = getDatabase(); // Get a reference to the database
    const user = auth.currentUser; // Get the current logged-in user

    if (user) {
      const userRef = ref(db, "users/" + user.uid); // Reference to the user data in Firebase

      // Fetch the data from Firebase
      onValue(userRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          setUserData({
            username: data.username,
            fullName: data.fullName,
            profileURL: data.profilePicture || "", // Use a placeholder if no profile URL is provided
            Role: data.Role || "Unknown Role", // Set a default role
            description: data.description || "No description available",
          });
        }
      });
    }
  }, []);

  return (
    <div className="absolute top-full right-2 p-4 ">
      {/* Blue Top Section */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-blue-500 to-blue-400 rounded-t-3xl" />

      {/* Main Card */}
      <div className="relative top-10 bg-white rounded-3xl shadow-xl overflow-">
        {/* Content */}
        <div className="pt-12 pb-8 px-8">
          {/* Profile Picture */}
          <div className="flex justify-center -mt-24 mb-6">
            <div className="relative">
              <div className="absolute -inset-1 bg-white rounded-full" />
              <div className="relative w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-lg">
                {userData.profileURL ? (
                  <img
                    src={userData.profileURL}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                    <span className="text-3xl text-white">
                      {userData.fullName?.charAt(0) || "?"}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* User Info */}
          <div className="text-center  mb-6">
            <h2 className="text-2xl font-bold text-gray-800">
              {userData.fullName || "Loading..."}
            </h2>
            {userData.username && (
              <p className="text-blue-500 text-sm font-medium">
                @{userData.username}
              </p>
            )}
          </div>

          {/* Role & Description */}
          <div className="text-center mb-8  space-y-1">
            <div className="text-blue-600 font-medium whitespace-nowrap">
              {userData.Role}
            </div>
            <p className="text-gray-600 text-sm shadow-md border-gray-100 border-2 rounded">
              {userData.description || "//No Description"}
            </p>
          </div>

          {/* Buttons */}
          <div className="flex justify-center gap-4">
            <Button
              onClick={() => {
                Navigate("/profile");
              }}
              variant="outlined"
              sx={{
                backgroundColor: "#3b82f6",
                color: "white",
                "&:hover": {
                  backgroundColor: "#2563eb",
                },
                border: "none",
                paddingX: 2,
              }}
              startIcon={<Edit2 />}
            >
              Edit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlowProfile;
