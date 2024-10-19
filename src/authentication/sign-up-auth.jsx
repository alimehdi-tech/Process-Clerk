import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { auth } from "../Firebase";
import { firebaseapp } from "../Firebase";
import { showErrorToast, showSuccessToast } from "./toast/toastService";

const db = getDatabase(firebaseapp);

export const signUp = (email, password, username, fullName, navigate) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;

      // Save user data in the database
      return set(ref(db, "users/" + user.uid), {
        username: username,
        fullName: fullName,
        email: email,
      })
        .then(() => {
          showSuccessToast("User data saved successfully!");
        })
        .catch((error) => {
          throw new Error("Error saving user data: " + error.message);
        });
    })
    .then(() => {
      const user = auth.currentUser; // Fetch user again for verification
      return sendEmailVerification(user)
        .then(() => {
          showSuccessToast(
            "Verification email sent successfully! Please check your inbox."
          );
          navigate("/mail-component"); // Use navigate here
        })
        .catch((error) => {
          showErrorToast("Error sending verification email: " + error.message);
        });
    })
    .catch((error) => {
      showErrorToast("Error signing up: " + error.message);
    });
};
