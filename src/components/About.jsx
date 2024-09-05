import React from "react";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className="h-svh flex">
        <div className="bg-gray-900 h-svh w-1/3">
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR00MyCsjZni2ldokzr0hEojOyV6jBVjU4XlQ&s"
              className="pt-5 pl-20 rounded-lg rounded-tl-lg"
              alt=""
            />
          </div>
          <div className="p-6 text-orange-300">
            <p className="text-justify">
              Recent graduate with a degree in Computer Science and a passion
              for building seamless and functional user interfaces. Seeking a
              role to apply exceptional ability to switch between programming
              languages and frameworks as needed, while working quickly and
              independently
            </p>
          </div>
        </div>
        <div className="bg-gray-950 h-svh w-2/3  p-40 gap-16 text-6xl ">
          <ul className="flex text-white p-10">
            <li className="p-10 hover:text-7xl">
              <Link>
                {" "}
                <FaInstagramSquare />
              </Link>
            </li>
            <li className="p-10 hover:text-7xl">
              <Link>
                {" "}
                <FaFacebook />
              </Link>
            </li>
            <li className="p-10 hover:text-7xl">
              <a href="https://www.linkedin.com/in/rahul-chauhan-4562261b7">
                <FaLinkedin />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default About;
