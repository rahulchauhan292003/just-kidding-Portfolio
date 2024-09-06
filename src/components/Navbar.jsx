import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <>
    <div className="bg-black text-white flex justify-between ">
    <h4 className="px-4 pt-4 text-2xl font-bold">Portfolio</h4>
      <ul className="bg-black text-white flex gap-16 p-5 justify-end">
        
        <li className="hover:text-orange-400 font-semibold">
          <Link to={"/home"}>Home</Link>
        </li>
        <li className="hover:text-orange-400 font-semibold">
          <Link to={"/projects"}>Projects</Link>
        </li>
        <li className="hover:text-orange-400 font-semibold">
          <Link to={"/about"}>About</Link>
        </li>
        <li className="hover:text-orange-400 font-semibold">
          <Link to={"/contact"}>Contact</Link>
        </li>
      </ul>
      </div>
    </>
  );
};

export default Navbar;
