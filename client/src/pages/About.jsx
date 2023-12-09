import React from "react";
import HighlightText from "../components/common/HighlightText";
import BannerImage1 from "../assets/Images/aboutus1.webp";
import BannerImage2 from "../assets/Images/aboutus2.webp";
import BannerImage3 from "../assets/Images/aboutus3.webp";
import HighOrangeText from "../components/common/HighOrangeText";
import HighOrange2 from "../components/common/HighOrange2";
import HighRed from "../components/common/HighRed";
import FoundingStory from "../assets/Images/FoundingStory.png";
import ContactForm from "../components/core/ContactPage/ContactForm";
import Footer from "../components/common/Footer";

const About = () => {
  return (
    <div className="mt-20 flex flex-col items-center">
      {/* Section 1 */}
      <section className="lg:w-10/12 w-[95%] flex flex-col items-center gap-14">
        <div className="flex flex-col items-center gap-[38px]">
          <p className="text-base text-richblack-200">About us</p>
          <div className="flex items-center flex-col lg:w-[65%] gap-4">
            <header className="text-4xl font-semibold text-richblack-5  text-center">
              Driving Innovation in Online Education for a <br />
              <HighlightText text={"Brighter Future"} />
            </header>
            <p className="text-richblack-300 text-base font-normal text-center">
              Studynotion is at the forefront of driving innovation in online
              education. We're passionate about creating a brighter future by
              offering cutting-edge courses, leveraging emerging technologies,
              and nurturing a vibrant learning community.
            </p>
          </div>
        </div>
        <div className="flex gap-6 items-center">
          <img src={BannerImage1} alt="Banner Images" />
          <img src={BannerImage2} alt="Banner Images" />
          <img src={BannerImage3} alt="Banner Images" />
        </div>
      </section>
      {/* Section 2 */}
      <section className="lg:w-10/12 w-[95%] flex flex-col items-center gap-14 my-[90px]">
        <p className="text-4xl font-semibold leading-[52px] text-richblack-100 text-center relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="16"
            viewBox="0 0 21 16"
            fill="none"
            className="absolute lg:top-0 lg:left-14"
          >
            <path
              d="M0.644531 15.9998V11.3975C0.644531 10.0907 0.900213 8.7555 1.41158 7.39187C1.92294 6.02823 2.59766 4.74272 3.43572 3.53533C4.27379 2.32795 5.18288 1.31942 6.163 0.509766L10.1687 2.87482C9.37322 4.12482 8.71982 5.43164 8.20845 6.79528C7.71129 8.15891 7.46271 9.6788 7.46271 11.3549V15.9998H0.644531ZM11.4045 15.9998V11.3975C11.4045 10.0907 11.6602 8.7555 12.1715 7.39187C12.6829 6.02823 13.3576 4.74272 14.1957 3.53533C15.0337 2.32795 15.9428 1.31942 16.9229 0.509766L20.9286 2.87482C20.1332 4.12482 19.4798 5.43164 18.9684 6.79528C18.4712 8.15891 18.2227 9.6788 18.2227 11.3549V15.9998H11.4045Z"
              fill="#424854"
            />
          </svg>
          We are passionate about revolutionizing the way we learn. Our
          innovative platform <HighlightText text={"combines technology"} />,{" "}
          <HighOrangeText text={"expertise"} />, and community to create an{" "}
          <HighOrange2 text={"unparalleled educational experience."} />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="16"
            viewBox="0 0 21 16"
            fill="none"
            className="absolute bottom-8 lg:right-[200px] right-0"
          >
            <path
              d="M20.3544 1.53673e-06V4.60228C20.3544 5.90909 20.0987 7.24432 19.5874 8.60796C19.076 9.97159 18.4013 11.2571 17.5632 12.4645C16.7251 13.6719 15.8161 14.6804 14.8359 15.4901L10.8303 13.125C11.6257 11.875 12.2791 10.5682 12.7905 9.20455C13.2876 7.84091 13.5362 6.32102 13.5362 4.64489L13.5362 9.40664e-07L20.3544 1.53673e-06ZM9.59446 5.96065e-07V4.60227C9.59446 5.90909 9.33878 7.24432 8.82742 8.60796C8.31605 9.97159 7.64134 11.2571 6.80327 12.4645C5.9652 13.6719 5.05611 14.6804 4.07599 15.4901L0.0703125 13.125C0.865768 11.875 1.51918 10.5682 2.03054 9.20455C2.5277 7.84091 2.77628 6.32102 2.77628 4.64489L2.77628 0L9.59446 5.96065e-07Z"
              fill="#424854"
            />
          </svg>
        </p>
      </section>

      {/* Section 3 */}
      <section className="lg:w-10/12 w-[95%] flex flex-col items-center gap-14 my-[90px]">
        <div className="flex lg:flex-row flex-col justify-evenly gap-10 my-[90px]">
          <div className="flex flex-col gap-6 lg:w-[35%] w-[90%]">
            <div className="text-4xl font-semibold">
              <HighRed text={"Our Founding Story"} />
            </div>
            <div className="flex flex-col gap-4 text-richblack-300 text-base font-inter">
              <p>
                Our e-learning platform was born out of a shared vision and
                passion for transforming education. It all began with a group of
                educators, technologists, and lifelong learners who recognized
                the need for accessible, flexible, and high-quality learning
                opportunities in a rapidly evolving digital world.
              </p>
              <p>
                As experienced educators ourselves, we witnessed firsthand the
                limitations and challenges of traditional education systems. We
                believed that education should not be confined to the walls of a
                classroom or restricted by geographical boundaries. We
                envisioned a platform that could bridge these gaps and empower
                individuals from all walks of life to unlock their full
                potential.
              </p>
            </div>
          </div>

          <div className="lg:w-[40%] w-[90%] flex items-center">
            <img
              src={FoundingStory}
              alt="Founding story"
              className="w-full"
            />
          </div>
        </div>
        <div className="flex lg:flex-row flex-col items-center justify-evenly my-[90px] lg:gap-0 gap-5">
          <div className="lg:w-[40%] w-[90%] flex flex-col lg:gap-6 gap-2">
            <div className="text-4xl font-semibold">
              <HighOrangeText text={"Our Vision"} />
            </div>
            <div className="text-base font-normal text-richblack-300">
              <p>
                With this vision in mind, we set out on a journey to create an
                e-learning platform that would revolutionize the way people
                learn. Our team of dedicated experts worked tirelessly to
                develop a robust and intuitive platform that combines
                cutting-edge technology with engaging content, fostering a
                dynamic and interactive learning experience.
              </p>
            </div>
          </div>
          <div className="lg:w-[40%] w-[90%] flex flex-col lg:gap-6 gap-2">
            <div className="text-4xl font-semibold">
              <HighlightText text={"Our Mission"} />
            </div>
            <div className="text-base font-normal text-richblack-300">
              <p>
                our mission goes beyond just delivering courses online. We
                wanted to create a vibrant community of learners, where
                individuals can connect, collaborate, and learn from one
                another. We believe that knowledge thrives in an environment of
                sharing and dialogue, and we foster this spirit of collaboration
                through forums, live sessions, and networking opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 */}
      <section className="flex lg:flex-row justify-evenly bg-richblack-800 w-screen flex-col py-16 items-center gap-14 my-[90px]">
        <div className="gap-3 flex flex-col">
          <p className="text-3xl font-bold text-richblack-5 text-center">5K</p>
          <p className="text-base text-richblack-500 font-semibold">
            Active Students
          </p>
        </div>
        <div className="gap-3 flex flex-col">
          <p className="text-3xl font-bold text-richblack-5 text-center">10+</p>
          <p className="text-base text-richblack-500 font-semibold">Mentors</p>
        </div>
        <div className="gap-3 flex flex-col">
          <p className="text-3xl font-bold text-richblack-5 text-center">
            200+
          </p>
          <p className="text-base text-richblack-500 font-semibold">Courses</p>
        </div>
        <div className="gap-3 flex flex-col">
          <p className="text-3xl font-bold text-richblack-5 text-center">50+</p>
          <p className="text-base text-richblack-500 font-semibold">Awards</p>
        </div>
      </section>

      {/* section 5 */}
      <section className="lg:w-10/12 w-[95%] flex flex-col items-center my-[90px] bg-richblack-900">
        <div className="flex w-full lg:flex-row flex-col justify-between">
          <div className="text-richblack-5 text-4xl font-semibold lg:w-[40%] w-[95%] h-[294px]">
            <p>
              World-Class Learning for{" "}
              <HighlightText text={"Anyone, Anywhere"} />
            </p>
            <p className="text-base font-normal mt-3 text-richblack-300">
              Studynotion partners with more than 275+ leading universities and
              companies to bring flexible, affordable, job-relevant online
              learning to individuals and organizations worldwide.
            </p>
          </div>
          <div className="lg:w-1/2 w-full flex ">
            <div className="w-1/2 lg:p-8 p-4 bg-richblack-700">
              <p className="text-[18px] font-inter font-semibold text-richblack-5 mb-8 ">
                Curriculum Based on Industry Needs
              </p>
              <p className="text-[14px] font-normal text-richblack-100">
                Save time and money! The Belajar curriculum is made to be easier
                to understand and in line with industry needs.
              </p>
            </div>
            <div className="w-1/2 lg:p-8 p-4 bg-richblack-800">
              <p className="text-[18px] font-inter font-semibold text-richblack-5 mb-8 ">
                Our Learning Methods
              </p>
              <p className="text-[14px] font-normal text-richblack-100">
                The learning process uses the namely online and offline.
              </p>
            </div>
          </div>
        </div>
        <div className="flex w-full lg:flex-row flex-col justify-between h-[294px]">
          <div className="lg:w-1/2 w-full flex h-[294px]">
            <div className="w-1/2 lg:p-8 p-4"></div>
            <div className="w-1/2 lg:p-8 p-4    bg-richblack-700">
              <p className="text-[18px] font-inter font-semibold text-richblack-5 mb-8">
                Certification
              </p>
              <p className="text-[14px] font-normal text-richblack-100 lg:mb-0 mb-10">
                You will get a certificate that can be used as a certification
                during job hunting.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 w-full flex">
            <div className="w-1/2 lg:p-8 p-4 lg:bg-richblack-800 bg-richblack-700">
              <p className="text-[18px] font-inter font-semibold text-richblack-5 mb-8 ">
                Rating "Auto-grading"
              </p>
              <p className="text-[14px] font-normal text-richblack-100">
                Save time and money! The Belajar curriculum is made to be easier
                to understand and in line with industry needs.
              </p>
            </div>
            <div className="w-1/2 lg:p-8 p-4 lg:bg-richblack-700 bg-richblack-800">
              <p className="text-[18px] font-inter font-semibold text-richblack-5 mb-8 ">
                Our Learning Methods
              </p>
              <p className="text-[14px] font-normal text-richblack-100">
                The learning process uses the namely online and offline.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 form section */}
      <section className="w-screen lg:px-[420px] px-[20px] pt-[90px] lg:mt-0 mt-20">
        {/* Greeting message */}
        <div className="text-center">
            <h1 className="text-4xl font-semibold text-richblack-5">
            Get in Touch
            </h1>
            <p className="text-base font-normal text-richblack-300 mb-8">
            We'd love to here for you, Please fill out this form.
            </p>
        </div>
        <ContactForm/>
      </section>

      {/* Review form other learners section */}
      <h2 className="text-center text-4xl text-richblack-5 font-semibold mt-10">
          Review from Other learners
      </h2>
      
      {/* Footer */}
        <div className="w-screen">
            <Footer/>
        </div>
    </div>
  );
};

export default About;
