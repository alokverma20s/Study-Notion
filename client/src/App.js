import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import Navbar from "./components/common/Navbar"
import OpenRoute from "./components/core/Auth/OpenRoute"

import Login from "./pages/Login"
import Signup from "./pages/Signup"
import ForgetPassword from "./pages/ForgetPassword";
import UpdatePassword from "./pages/UpdatePassword";
import VerifyEmail from "./pages/VerifyEmail";
import About from "./pages/About";
import Contactus from "./pages/Contactus";
import Dashboard from "./pages/Dashboard";
import MyProfile from "./components/core/Dashboard/MyProfile";
import NotFound from "./pages/NotFound";
import PrivateRoute from "./components/core/Auth/PrivateRoute";
import Settings from "./components/core/Dashboard/Settings";

function App() {
  return (
    <div className="w-screen min-h-screen bg-richblack-900 flex flex-col font-inter">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="signup"
          element={
            <OpenRoute>
              <Signup />
            </OpenRoute>
          }
        />
        <Route
          path="login"
          element={
            <OpenRoute>
              <Login />
            </OpenRoute>
          }
        />
        <Route
          path="forgot-password"
          element={
            <OpenRoute>
              <ForgetPassword />
            </OpenRoute>
          }
        />
        <Route
          path="update-password/:token"
          element={
            <OpenRoute>
              <UpdatePassword />
            </OpenRoute>
          }
        />
        <Route
          path="verify-email"
          element={
            <OpenRoute>
              <VerifyEmail />
            </OpenRoute>
          }
        />
        <Route
          path="about"
          element={
            <OpenRoute>
              <About />
            </OpenRoute>
          }
        />
        <Route path="contact" element={<Contactus />} />

        <Route
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
            }
        >
          <Route path="dashboard/my-profile" element={<MyProfile />} />
          <Route path="dashboard/Settings" element={<Settings/>} />

        </Route>


        <Route path="*" element={<NotFound />} />
      </Routes>

    </div>
  );
}

export default App;
