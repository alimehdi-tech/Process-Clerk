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
import NotFound from "../component/not-found";
import ProtectedRoute from "./ProtectedRoutes";
import FormBuilder from "../component/FormBuilder/FormBuilder.jsx";
import Upload from "../component/shared/Upload.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <SignIn />, // Public route
  },
  {
    path: "/home",
    element: <ProtectedRoute element={<Home />} />, // Protected route
    children: [
      {
        path: "invite",
        element: <EmailForm />,
      },{
        path: "upload",
        element: <Upload />,
      },
    ],
  },
  {
    path: "/signup",
    element: <SignUp />, // Public route
  },
  {
    path: "/membership",
    element: <ProtectedRoute element={<Membership />} />, // Protected route
  },
  {
    path: "/profile",
    element: <ProtectedRoute element={<Profile />} />, // Protected route
  },
  {
    path: "/forget-password",
    element: <ForgetPassword />, // Public route
  },
  {
    path: "/check-email",
    element: <CheckCode />, // Public route
  },
  {
    path: "/mail-component",
    element: <ProtectedRoute element={<MailComponent />} />, // Protected route
  },
  {
    path: "/Form",
    element: <FormBuilder />,
  },
  {
    path: "*",
    element: <NotFound />, // Catch-all for 404
  },
]);

export default router;
