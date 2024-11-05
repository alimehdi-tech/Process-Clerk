import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { getDatabase, ref, get } from "firebase/database";
import { auth } from "../Firebase";
import { onAuthStateChanged } from "firebase/auth"; // import auth listener
import Loading from "../component/shared/loading";

const ProtectedRoute = ({ element }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const checkAuthToken = () => {
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          const db = getDatabase();
          const userRef = ref(db, `users/${user.uid}`);
          const snapshot = await get(userRef);
          setIsAuthenticated(snapshot.exists());
        } else {
          setIsAuthenticated(false);
        }
      });
    };
    checkAuthToken();
  }, []);

  if (isAuthenticated === null) return <Loading />;

  return isAuthenticated ? element : <Navigate to="/" />;
};

export default ProtectedRoute;
