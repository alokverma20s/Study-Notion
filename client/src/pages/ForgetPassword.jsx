import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IoMdArrowRoundBack } from "react-icons/io";
import { getPasswordResetToken } from '../services/operations/authAPI';

const ForgetPassword = () => {
    const dispatch = useDispatch();
    const [emailSent, setEmailSent] = useState(false);
    const [email, setEmail] = useState("");
    const {loading} = useSelector((state)=> state.auth);

    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(getPasswordResetToken(email, setEmailSent));
    }
    return (
        <div className='flex items-center justify-center h-screen'>
            {
                loading ?(
                    <div className="">Loading...</div>
                )
                :
                (
                    <div className="flex flex-col justify-center text-white w-[508px] gap-3 p-8">
                        <h1 className=' text-4xl font-semibold text-richblack-5'>
                            {
                                !emailSent ? "Reset your password": "Check your Email"
                            }
                        </h1>
                        <p className='mb-9 text-lg font-normal text-richblack-100'>
                            {
                                !emailSent ? "Have no fear. We'll email you instructions to reset your password. If you dont have access to your email we can try account recovery":`We have sent the reset email to ${email}`
                            }
                        </p>
                        <form onSubmit={handleSubmit} className='flex flex-col gap-9'>
                            {
                                !emailSent && (
                                    <label>
                                        <p className=' text-sm font-normal mb-2'>Email Address<span className='text-[red]'>*</span></p>
                                        <input
                                        className='w-full p-3 bg-richblack-800 flex items-center rounded-lg placeholder:text-base'
                                        required
                                        type='email'
                                        name='email'
                                        value={email}
                                        onChange={(e)=>setEmail(e.target.value)}
                                        placeholder='Enter Your Email Address'
                                        />
                                    </label>
                                )
                            }
                            <button type='submit' className='text-center text-[13px] px-6 py-3 rounded-md font-bold bg-yellow-25 text-richblack-900 hover:scale-95 transition-all duration-200'>{!emailSent ? "Reset Password":"Resend Email"}</button>
                        </form>
                        <div className="flex items-center">
                            <IoMdArrowRoundBack/>
                            <p>Back to Login</p>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default ForgetPassword