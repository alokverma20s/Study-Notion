import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/common/Loader';
import OtpInput from 'react-otp-input'
import { IoMdArrowRoundBack } from 'react-icons/io';
import { GiBackwardTime } from "react-icons/gi";
import { Link, useNavigate } from 'react-router-dom';
import { sendOtp, signUp } from '../services/operations/authAPI';

const VerifyEmail = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {signupData, loading} = useSelector((state) => state.auth);
    const [otp, setOtp] = useState("");

    useEffect(()=>{
        if(!signupData){
            navigate('/signup');
        }
    },[])

    const handleSubmit = (e)=>{
        e.preventDefault();
        const {
            accountType,
            firstName,
            lastName,
            email,
            password,
            confirmPassword,
        } = signupData;
        dispatch(signUp(accountType, firstName, lastName, email, password, confirmPassword, otp, navigate))
    }
    
  return (
    <div className="flex items-center justify-center h-screen">
        {
            loading ? (
                <div className="">
                    <Loader/>
                </div>
            ):(
                <div className="flex flex-col justify-center text-white w-[508px] gap-3 p-8">
                    <h1 className=" text-4xl font-semibold text-richblack-5">Verify Email</h1>
                    <p className="mb-9 text-lg font-normal text-richblack-100">A verification code has been sent to you. Enter the code below</p>
                    <form onSubmit={handleSubmit}>
                        <OtpInput
                        value={otp}
                        onChange={setOtp}
                        numInputs={6}
                        // renderSeparator={<span>-</span>}
                        renderInput={(props) => <input {...props}
                        className='bg-richblack-800 w-full rounded-[0.5rem] text-richblack-5 p-3 text-center mx-3 font-semibold '
                        style={{
                            boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                          }}
                        />}
                        />
                        <button type='submit' className="text-center text-[13px] px-6 mt-7 py-3 rounded-md font-bold bg-yellow-25 text-richblack-900 hover:scale-95 transition-all duration-200 w-full">
                            Verify Email
                        </button>
                    </form>
                    <div className="flex items-center justify-between">
                        <Link to={'/login'} className="flex items-center gap-3 cursor-pointer text-base">
                            <IoMdArrowRoundBack fontSize={22}/>
                            <p>Back to Login</p>
                        </Link>
                        <button onClick={()=>dispatch(sendOtp(signupData.email, navigate))} className="flex items-center gap-3 cursor-pointer text-blue-100 text-base">
                            <GiBackwardTime fontSize={22}/>
                            <p>Resend it</p>
                        </button>
                    </div>
                </div>
            )
        }
    </div>
  )
}

export default VerifyEmail