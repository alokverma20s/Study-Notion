import React from 'react'
import HighlightText from "../../common/HighlightText"
import know_your_progress  from "../../../assets/Images/Know_your_progress.svg"
import compare_with_others from "../../../assets/Images/Compare_with_others.svg"
import plan_your_lesson from "../../../assets/Images/Plan_your_lessons.svg"
import CTAButton from "../HomePage/Button"

const LearningLanguageSection = () => {
  return (
    <div className='mt-[130px] mb-32'>
      <div className='flex flex-col gap-5 items-center w-full'>

            <div className='text-4xl font-semibold text-center'>
                Your Swiss Knife for
                <HighlightText text={" learning any language"} />
            </div>

            <div className='lg:text-center text-justify text-richblack-600 mx-auto text-base font-medium lg:w-[70%] w-full'>
            Using spin making learning multiple languages easy. with 20+ languages realistic voice-over, progress tracking, custom schedule and more.
            </div>

            <div className='flex lg:flex-row flex-col items-center justify-center mt-5'>
                <img 
                    src = {know_your_progress}
                    alt = "KNowYourProgressImage"
                    className='object-contain lg:-mr-32 max-sm:relative -bottom-12 '
                />
                <img 
                    src = {compare_with_others}
                    alt = "KNowYourProgressImage"
                    className='object-contain'
                />
                <img 
                    src = {plan_your_lesson}
                    alt = "KNowYourProgressImage"
                    className='object-contain lg:-ml-36 max-sm:relative bottom-[75px]'
                />
            </div>

            <div className='w-fit -mt-16 lg:mt-0'>
                <CTAButton active={true} linkto={"/signup"}>
                    <div>
                        Learn more
                    </div>
                </CTAButton>
            </div>

      </div>
    </div>
  )
}

export default LearningLanguageSection
