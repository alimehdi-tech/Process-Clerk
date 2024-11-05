import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getDatabase, ref, set, get } from "firebase/database";
import { auth } from "../Firebase";
import { firebaseapp } from "../Firebase";
import { showErrorToast } from "./toast/toastService";

const db = getDatabase(firebaseapp);
const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = (navigate) => {
  signInWithPopup(auth, googleProvider)
    .then((result) => {
      const user = result.user;
      const userRef = ref(db, "users/" + user.uid);

      // Check if the user already exists in the database
      get(userRef)
        .then((snapshot) => {
          if (!snapshot.exists()) {
            // User does not exist, save their data
            return set(userRef, {
              fullName: user.displayName,
              email: user.email,
              profilePicture: user.photoURL, // Save profile picture URL
            })
              .then(() => {
                navigate("/Home"); // Navigate to a secure page after sign-in
              })
              .catch((error) => {
                throw new Error("Error saving user data: " + error.message);
              });
          } else {
            // User already exists, proceed with navigation
            navigate("/Home");
          }
        })
        .catch((error) => {
          throw new Error("Error checking user data: " + error.message);
        });
    })
    .catch((error) => {
      showErrorToast("Error signing in with Google: " + error.message);
    });
};
