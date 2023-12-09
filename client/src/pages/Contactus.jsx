import React from 'react'
import ContactForm from '../components/core/ContactPage/ContactForm'
import Footer from '../components/common/Footer'
import { IoMdChatbubbles } from "react-icons/io";
import { FaGlobeEurope } from "react-icons/fa";
import { IoCall } from "react-icons/io5";

const Contactus = () => {
  return (
    <div className='w-screen '>
        <div className="lg:px-[120px] px-3 bg-richblack-900 flex lg:flex-row flex-col mt-[150px] lg:justify-between justify-center">
            {/* Info section */}
            <div className=" flex flex-col gap-10 rounded-xl bg-richblack-800 h-fit p-6 lg:w-[35%] w-[100%] lg:mb-0 mb-[100px]">
                <div className="text-richblack-300 flex gap-4 ">
                    <div className="w-[10%]">
                        <IoMdChatbubbles fontSize={24}/>
                    </div>
                    <div className="w-[90%]">
                        <p className='text-[18px] text-richblack-5 font-semibold'>Chat on us</p>
                        <p className='text-[14px] text-richblack-300'>Our friendly team is here to help.</p>
                        <p className='text-[14px] text-richblack-300'>@mail address</p>
                    </div>
                </div>
                <div className="text-richblack-300 flex gap-4">
                    <div className="w-[10%]">
                        <FaGlobeEurope fontSize={24}/>
                    </div>
                    <div className="w-[90%]">
                        <p className='text-[18px] text-richblack-5 font-semibold'>Visit us</p>
                        <p className='text-[14px] text-richblack-300'>Come and say hello at our office HQ.</p>
                        <p className='text-[14px] text-richblack-300'>Here is the location/ address</p>
                    </div>
                </div>
                <div className="text-richblack-300 flex gap-4">
                    <div className="w-[10%]">
                        <IoCall fontSize={24}/>
                    </div>
                    <div className="w-[90%]">
                        <p className='text-[18px] text-richblack-5 font-semibold'>Call us</p>
                        <p className='text-[14px] text-richblack-300'>Mon - Fri From 8am to 5pm</p>
                        <p className='text-[14px] text-richblack-300'>+123 456 7890</p>
                    </div>
                </div>
                
            </div>
            {/* form section */}
            <div className=" flex flex-col gap-8 mb-20 lg:w-[60%] border-richblack-700 border-2 lg:p-[52px] rounded-xl p-8">
                <div className="flex flex-col gap-6">
                    <p className='text-4xl font-semibold text-richblack-5'>Got a Idea? We've got the skills. <br /> Let's team up</p>
                    <p className='text-base font-normal text-richblack-300'>Tall us more about yourself and what you're got in mind.</p>
                </div>
                <ContactForm/>
            </div>
        </div>
            <div className="">
                <Footer/>
            </div>
    </div>
  )
}

export default Contactus