import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { apiConnector } from "../../../services/apiconnector";
import { contactusEndpoint } from "../../../services/apis";
import CountryCode from '../../../data/countrycode.json'

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const submitContactForm = async (data) => {
    console.log("Logging data", data);
    try {
      setLoading(true);
      // const response = await apiConnector("POST", contactusEndpoint.CONTACT_US_API, data);
      const response = {status: "OK"}
      console.log("Logging Response", response);
      setLoading(false);
    } catch (error) {
      console.log("Error", error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        email: "",
        firstName: "",
        lastName: "",
        message: "",
        phoneNo: "",
      });
    }
  }, [reset, isSubmitSuccessful]);

  return (
    <div>
      
      {/* Form */}
      <form onSubmit={handleSubmit(submitContactForm)}>
        <div className="flex gap-4 flex-col">

          {/* Name */}
          <div className="flex gap-4 w-full">
            <label className="w-1/2 relative">
              <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
                First Name <sup className="text-pink-200">*</sup>
              </p>
              <input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="Enter first name"
                {...register("firstName", { required: true })}
                style={{
                  boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                }}
                className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
              />
              {errors.firstName && <span className="absolute text-xs text-pink-200 top-[78px] right-0">Please enter Your first Name.</span>}
            </label>
            <label className="w-1/2">
              <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
                Last Name
              </p>
              <input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Enter last name"
                {...register("lastName")}
                style={{
                  boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                }}
                className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
              />
            </label>
          </div>

          {/* Email */}
          <label className="w-full relative">
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
              Email Address <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="text"
              name="email"
              id="email"
              placeholder="Enter email address"
              {...register("email", { required: true })}
              style={{
                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
              }}
              className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
            />
            {errors.email && <span className="absolute text-xs text-pink-200 bottom-[-20px] right-0">Please enter email.</span>}
          </label>

          {/* Phone Number */}
          <div >
            <label htmlFor="" className="flex flex-col">
              <p htmlFor='phonenumber' className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
                Phone Number <sup className="text-pink-200">*</sup>
              </p>

              {/* DropDown */}
              <div className=" w-full flex gap-4 justify-between relative">
                <select name="countryCode" id="countryCode" className="w-[25%] rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
                style={{
                  boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                }}
                {...register("countryCode", {required: true})}
                >
                  {
                    CountryCode.map((element, index)=>{
                      return (
                        <option key={index}>{element.code} - {element.country}</option>
                      )
                    })
                  }
                </select>
                <input
                type="number"
                name="phonenumber"
                id="phonenumber"
                {...register("phonenumber",
                {
                  required: {value: true, message: "Please enter phone number"},
                  maxLength: {value: 10, message: "Invalid Phone Number"},
                  minLength: {value: 8, message: "Invalid Phone Number"}
                })}
                placeholder="12345 67890"
                style={{
                  boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                }}
                className="w-[70%] rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5 remove-incrementbar"
                />
                {
                  errors.phonenumber && (
                    <span className="absolute text-xs text-pink-200 top-[50px] right-0">{errors.phonenumber.message}</span>
                  )
                }
              </div>
            </label>
          </div>

          {/* Message */}
          <div className=" relative">
            <label htmlFor="message" className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5"> Message <sup className="text-pink-200">*</sup></label>
            <textarea
              name="message"
              id="message"
              cols={30}
              rows={7}
              placeholder="Enter Your Message Here."
              style={{
                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)"
              }}
              className="w-full rounded-[0.5rem] bg-richblack-800 resize-none p-[12px] text-richblack-5"
              {...register("message", { required: true })}
            />
            {errors.message && <span className="absolute text-xs text-pink-200 bottom-[-13px] right-0" >Please Enter Your Message</span>}
          </div>

          {/* Submit Button */}
          <button type="submit" className="mt-6 rounded-[8px] bg-yellow-50 p-[12px] button-shadow font-medium text-richblack-900">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
