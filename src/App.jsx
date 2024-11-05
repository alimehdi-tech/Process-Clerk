import { RouterProvider } from "react-router-dom";
import router from "./routes/AppRouter";
import "./index.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
}

export default App;
