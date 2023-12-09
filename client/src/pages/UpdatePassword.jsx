import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/common/Loader";

import { FaEye, FaEyeSlash } from "react-icons/fa";
import { resetPassword } from "../services/operations/authAPI";
import { useLocation, useNavigate } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";

const UpdatePassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { loading } = useSelector((state) => state.auth);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });
  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };
  const { password, confirmPassword } = formData;
  const token = location.pathname.split("/").at(-1);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(resetPassword(password, confirmPassword, token, navigate));
  };
  return (
    <div className="flex items-center justify-center h-screen">
      {loading ? (
        <Loader />
      ) : (
        <div className="flex flex-col justify-center text-white w-[508px] gap-3 p-8">
          <h1 className=" text-4xl font-semibold text-richblack-5">
            Choose new Password
          </h1>
          <p className="mb-9 text-lg font-normal text-richblack-100">
            Almost done. Enter your new password and youre all set.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="flex gap-x-4 mt-4">
              <label className="relative w-full">
                <p className=" text-sm font-normal mb-2">
                  New password <span className="text-[red]">*</span>
                </p>
                <input
                  required
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={password}
                  onChange={handleOnChange}
                  placeholder="Enter New Password"
                  className="w-full p-3 bg-richblack-800 flex items-center rounded-lg placeholder:text-base"
                />
                <span
                  className="absolute right-3 top-[38px] cursor-pointer"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? (
                    <FaEye fontSize={24} />
                  ) : (
                    <FaEyeSlash fontSize={24} />
                  )}
                </span>
              </label>
            </div>
            <div className="flex gap-x-4 mt-4">
              <label className="relative w-full">
                <p className=" text-sm font-normal mb-2">
                  Confirm password <span className="text-[red]">*</span>
                </p>
                <input
                  required
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={handleOnChange}
                  placeholder="Confirm new Password"
                  className="w-full p-3 bg-richblack-800 flex items-center rounded-lg placeholder:text-base"
                />
                <span
                  className="absolute right-3 top-[38px] cursor-pointer"
                  onClick={() => setShowConfirmPassword((prev) => !prev)}
                >
                  {showConfirmPassword ? (
                    <FaEye fontSize={24} />
                  ) : (
                    <FaEyeSlash fontSize={24} />
                  )}
                </span>
              </label>
            </div>
            <button
              type="submit"
              className="text-center text-[13px] px-6 mt-7 py-3 rounded-md font-bold bg-yellow-25 text-richblack-900 hover:scale-95 transition-all duration-200"
            >
              Reset Password
            </button>
          </form>
          <div className="flex items-center">
            <IoMdArrowRoundBack />
            <p>Back to Login</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default UpdatePassword;
