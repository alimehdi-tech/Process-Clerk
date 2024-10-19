import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase";

export const signIn = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("Signed in successfully:", user);
    })
    .catch((error) => {
      console.error("Error signing in:", error.message);
    });
};
