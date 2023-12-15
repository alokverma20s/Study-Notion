import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import IconBtn from "../../common/IconBtn";
import { TiEdit } from "react-icons/ti";

const MyProfile = () => {
  const { user } = useSelector((state) => state.profile);
  const navigate = useNavigate();
  return (
    <div className=" mt-12 flex flex-col gap-6">
      <h1>My Profile</h1>

      {/* Section 1 */}
      <div className="flex justify-between rounded-[8px] bg-richblack-800 p-6 border-[1px] border-richblack-700 items-center">
        <div className=" flex items-center gap-6">
          <img
            src={user?.image}
            alt={`profile-${user?.firstName}`}
            className="aspect-square w-[78px] rounded-full object-cover "
          />
          <div className="">
            <p className="text-[18px] text-richblack-5 font-semibold font-inter">{user?.firstName + " " + user?.lastName}</p>
            <p className="text-[14px] text-richblack-300 font-normal">{user?.email}</p>
          </div>
        </div>
        <IconBtn
          text="Edit"
          customClasses="flex gap-x-2"
          onclick={() => navigate("/dashboard/settings")}
          children={<TiEdit />}
        />
      </div>

      {/* Section 2 */}

      <div className="flex flex-col p-6 bg-richblack-800 border-[1px] border-richblack-700 rounded-lg">
        <div>
          <div className="flex items-center justify-between ">
            <p className="text-[18px] text-richblack-5 font-semibold font-inter">About</p>
            <IconBtn
              text="Edit"
              customClasses="flex gap-x-2"
              onclick={() => navigate("/dashboard/settings")}
              children={<TiEdit />}
            />
          </div>
          <p className="text-[14px] text-richblack-300 font-normal">
            {user?.additionalDetails?.about ?? "Write something about yourself"}
          </p>
        </div>
      </div>

      {/* Section 3 */}
      <div className="flex flex-col p-6 bg-richblack-800 border-[1px] border-richblack-700 rounded-lg">
        <div className="flex items-center justify-between ">
          <p className="text-[18px] text-richblack-5 font-semibold font-inter">Personal Details</p>
          <IconBtn
            text="Edit"
            customClasses="flex gap-x-2"
            onclick={() => navigate("/dashboard/settings")}
            children={<TiEdit />}
          />
        </div>
        <div className="flex justify-start">
          <div className="w-1/2 flex flex-col gap-5">
            <div className="">
                <p className="text-[14px] text-richblack-300 font-normal">First Name</p>
                <p className="text-[14px] text-richblack-5 font-normal">{user?.firstName}</p>
            </div>
            <div className="">
                <p className="text-[14px] text-richblack-300 font-normal">Email</p>
                <p className="text-[14px] text-richblack-5 font-normal">{user?.email}</p>
            </div>
            <div className="">
                <p className="text-[14px] text-richblack-300 font-normal">Gender</p>
                <p className="text-[14px] text-richblack-5 font-normal">{user?.additionalDetails?.gender ?? "Add Gender"}</p>
            </div>
            </div>
            <div className="w-1/2 flex flex-col gap-5">
            <div className="">
                <p className="text-[14px] text-richblack-300 font-normal">Last Name</p>
                <p className="text-[14px] text-richblack-5 font-normal">{user?.lastName}</p>
            </div>
            <div className="">
                <p className="text-[14px] text-richblack-300 font-normal">Phone Number</p>
                <p className="text-[14px] text-richblack-5 font-normal">{user?.additionalDetails?.contactNumber ?? "Add Phone Number"}</p>
            </div>
            <div className="">
                <p className="text-[14px] text-richblack-300 font-normal">Date of Birth</p>
                <p className="text-[14px] text-richblack-5 font-normal">{user?.additionalDetails?.dateOfBirth ?? "Add Date of Birth"}</p>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
