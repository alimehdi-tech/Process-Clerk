import React, { useEffect, useState } from "react";
import { InviteIcon } from "../../assets/icons/invite/User_add";
import { NotificationIcon } from "../../assets/icons/notification";
import profile from "../../assets/images/profile.png";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import DropdownButton from "../section/dropdown";
import { auth } from "../../Firebase"; // Firebase auth
import { getDatabase, ref, get } from "firebase/database"; // Firebase database
import ProfileLoading from "../section/profile-loading";

const Topbar = () => {
  const [boolValue, setBoolValue] = useState(false);
  const [user, setUser] = useState(null); // Holds the authenticated user
  const [fullName, setFullName] = useState(""); // Holds the user's fullName from the database
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const interval = setInterval(() => {
      setBoolValue((prevBool) => !prevBool);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Listen for changes in the authenticated user state
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        setUser(currentUser); // Set the current authenticated user
        fetchFullName(currentUser.uid); // Fetch fullName from database using uid
      } else {
        setUser(null); // No user is authenticated, reset the state
        setFullName(""); // Reset fullName
        setLoading(true); // Reset loading state when user is null
      }
    });

    // Clean up the listener on component unmount
    return () => unsubscribe();
  }, []);

  const fetchFullName = async (uid) => {
    setLoading(true); // Set loading to true before fetching data
    const db = getDatabase(); // Initialize the database
    const userRef = ref(db, `users/${uid}`); // Reference to the user's data in the database

    try {
      const snapshot = await get(userRef); // Get the user data from the database
      if (snapshot.exists()) {
        const userData = snapshot.val(); // Extract the user data
        setFullName(userData.fullName); // Set fullName from the database
      } else {
        console.log("No data available");
      }
    } catch (error) {
      console.error("Error fetching user data: ", error);
    } finally {
      setLoading(false); // Set loading to false after fetching data
    }
  };

  return (
    <section className="flex justify-between items-center bg-gray-100 text-xl border-b-4">
      <div className="text-3xl p-6 py-8 font-bold block typewriter text-white bg-blue-700">
        <h1 key={boolValue}>{boolValue ? `e-signature` : `Process Clerk`}</h1>
      </div>

      <div className="flex items-center space-x-4 text-xl">
        <button className="text-gray-600 hover:text-gray-900 flex flex-row gap-3">
          <InviteIcon /> Invite new user
        </button>
        <DropdownButton />
      </div>

      <section className="flex items-center space-x-4 text-xl px-6">
        <Link to="/membership">
          <button className="subscribe rounded-full p-4 shadow-md">
            <IoIosInformationCircleOutline className="subscribe-svg" />
            <span>Start Subscription</span>
          </button>
        </Link>
        <button className="bell">
          <NotificationIcon />
        </button>
        {loading ? (
          <ProfileLoading /> // Show loading indicator if data is being fetched
        ) : user ? (
          <div
            className="flex flex-row items-center gap-2 p-2 Animated-btn"
            style={{ border: "none" }}
          >
            <h1 className="text-gray-600">{fullName}</h1>
            <img
              src={user.photoURL || profile}
              className="h-12 rounded-full"
              alt="User Profile"
            />
          </div>
        ) : null}
      </section>
    </section>
  );
};

export default Topbar;
