import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from './Navbar/Navbar';
// import Footer from './Footer';
import img from "../assests/stud.jpeg";

const ChatLanding = () => {
  return (
    <div className="min-h-screen bg-gray-100">
     <div className="relative p-16 bg-customYellow">
        <Navbar />
      </div>
    <div className="relative bg-customBlue top-28 text-white py-16 px-8">
      <div className="max-w-5xl mx-auto flex flex-col gap-24 md:flex-row items-center">
        {/* Left side content */}
        <div className="md:w-1/2">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Something on your mind?
          </h1>
          <h2 className="text-2xl md:text-3xl text-customGreen font-bold mb-6">
            Chat with an expert who understands
          </h2>
          <p className="text-lg mb-4">
            Our expert have experience with mental health challenges and use this experience to support others.
          </p>
         
          <Link to = "/userchat" className="bg-customGreen hover:bg-customYellow hover:text-black text-white font-bold py-2 px-4 rounded-full">
            Chat Now
          </Link>
        </div>
        {/* Right side image placeholder */}
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img src={img} alt="Illustration" className="max-w-full h-auto"/>
        </div>
      </div>

      {/* Bottom features */}
      <div className="bg-gray-100 text-blue-900 py-8 mt-16">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start">
            <span className="bg-purple-200 p-2 rounded-full">
              <svg className="w-6 h-6 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884l7.166 3.897c.083.045.175.069.269.069s.186-.024.269-.069l7.166-3.897C16.917 5.776 17 5.592 17 5.395c0-.197-.083-.38-.233-.486L9.601 1.03c-.15-.105-.352-.105-.502 0L2.236 4.91C2.085 5.015 2.003 5.198 2.003 5.395c0 .197.082.38.233.489zM2 14.695c0 .197.082.38.233.486l7.166 3.897c.083.045.175.069.269.069s.186-.024.269-.069l7.166-3.897c.15-.105.233-.289.233-.486v-7.539l-7.165 3.897c-.15.082-.352.082-.502 0L2 7.156v7.539z" />
              </svg>
            </span>
            <p className="ml-4 text-lg">
              Free text-based support with an expert
            </p>
          </div>
          <div className="flex items-start">
            <span className="bg-purple-200 p-2 rounded-full">
              <svg className="w-6 h-6 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884l7.166 3.897c.083.045.175.069.269.069s.186-.024.269-.069l7.166-3.897C16.917 5.776 17 5.592 17 5.395c0-.197-.083-.38-.233-.486L9.601 1.03c-.15-.105-.352-.105-.502 0L2.236 4.91C2.085 5.015 2.003 5.198 2.003 5.395c0 .197.082.38.233.489zM2 14.695c0 .197.082.38.233.486l7.166 3.897c.083.045.175.069.269.069s.186-.024.269-.069l7.166-3.897c.15-.105.233-.289.233-.486v-7.539l-7.165 3.897c-.15.082-.352.082-.502 0L2 7.156v7.539z" />
              </svg>
            </span>
            <p className="ml-4 text-lg">
              Chat in private about anything: nothing’s too big or small
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ChatLanding;
