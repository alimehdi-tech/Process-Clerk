import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { getDatabase, ref, get } from "firebase/database";
import { auth } from "../Firebase";
import Loading from "../component/shared/loading";
const ProtectedRoute = ({ element }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const checkAuthToken = async () => {
      const user = auth.currentUser; // Get the currently signed-in user

      if (user) {
        const db = getDatabase();
        const userRef = ref(db, `users/${user.uid}`); // Path to user data
        const snapshot = await get(userRef);

        if (snapshot.exists()) {
          setIsAuthenticated(true); // User exists in the database
        } else {
          setIsAuthenticated(false); // User does not exist
        }
      } else {
        setIsAuthenticated(false); // No user is signed in
      }
    };

    checkAuthToken();
  }, []);

  if (isAuthenticated === null) {
    return <Loading />;
  }

  return isAuthenticated ? element : <Navigate to="/" />;
};

export default ProtectedRoute;
