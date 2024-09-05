import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
    <div className="bg-slate-800 flex">
      <div className="bg-slate-800 h-svh ">
        <h4 className="text-yellow-400 pt-28 pl-20">Hello, Welcome</h4>
        <div className="pt-4">
          <h1 className="text-white text-4xl font-extrabold  pl-20">
            I am Rahul Chauhan
          </h1>
        </div>
        <div className="w-96 pt-5 text-white">
          <p className="pl-20 text-justify">
            I am writing to express my strong interest in the Fresher Software
            Engineer position at Narratex. As a recent graduate with a degree in
            Computer Science and a passion for software development, I am
            excited about the opportunity to contribute to your innovative team
            and make a meaningful impact in the industry.
          </p>
        </div>
        <div className="pl-20 pt-5 ">
          <button className=" text-black bg-yellow-500 rounded-md p-2 hover:text-lg ring-1"> <Link to={'/contact'} >
            Contact us</Link>
          </button>
        </div>
        
      </div>
      <div className="flex items-center pl-64">
          <img
            src="https://www.shutterstock.com/image-photo/successful-caucasian-young-man-student-600nw-2141124049.jpg"
            className="h-64 w-80 rounded-md"
            alt=""
          />
        </div>
        </div>
    </>
  );
};

export default Home;
