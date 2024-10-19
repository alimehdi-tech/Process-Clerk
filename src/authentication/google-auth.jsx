import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { auth } from "../Firebase";
import { firebaseapp } from "../Firebase";
import { showErrorToast } from "./toast/toastService";

const db = getDatabase(firebaseapp);
const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = (navigate) => {
  signInWithPopup(auth, googleProvider)
    .then((result) => {
      const user = result.user;

      // Save or update user data in the database, including the profile picture (photoURL)
      return set(ref(db, "users/" + user.uid), {
        username: user.displayName,
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
    })
    .catch((error) => {
      showErrorToast("Error signing in with Google: " + error.message);
    });
};
