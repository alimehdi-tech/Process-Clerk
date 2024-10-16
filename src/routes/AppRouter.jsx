import { createBrowserRouter } from "react-router-dom";

import ForgetPassword from "../component/section/forget-password";
import SignUp from "../component/sign-up";
import SignIn from "../component/sign-in";
import CheckCode from "../component/section/check-email";
import MailComponent from "../component/section/mail-component";
import Home from "../component/Home";
import Membership from "../component/section/membership";
import Profile from "../component/Profile";
import EmailForm from "../component/shared/email";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignIn />,
  },
  {
    path: "/home",
    element: <Home />,
    children: [
      {
        path: "invite", // No leading slash for nested paths
        element: <EmailForm />,
      },
    ],
  },
  {
    path: "/Signup",
    element: <SignUp />,
  },
  {
    path: "/membership",
    element: <Membership />,
  },
  {
    path: "/Profile",
    element: <Profile />,
  },
  {
    path: "forget-password",
    element: <ForgetPassword />,
  },
  {
    path: "check-email",
    element: <CheckCode />,
  },
  {
    path: "mail-component",
    element: <MailComponent />,
  },
]);

export default router;
