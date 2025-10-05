import React from "react";
import { Link } from "react-router";


const Navbar = () => {
const links = <>
    <Link to={'/'}><li className="mr-6 text-[18px] hover:text-blue-500 hover:border hover:border-blue-500 px-2 py-1  rounded-lg">Home</li></Link>
    <Link to={'/ReadList'}><li className="mr-6 text-[18px] hover:text-blue-500 hover:border hover:border-blue-500 px-2 py-1 rounded-lg">Listed Books</li></Link>
   <Link to={'/PageToRead'}> <li  className="text-[18px]  hover:text-blue-500  hover:border hover:border-blue-500 px-2 py-1  rounded-lg">Pages to Read</li></Link>
</>
  return (
    <div className="navbar  shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1  mt-3 w-52 p-2 shadow"
          >
            {links}

          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Book-Vibe</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn mr-3 bg-gradient-to-r from-slate-50 to-zinc-200 text-gray-800 border-none hover:from-slate-100 hover:to-zinc-300">Sign in</a>
        <a  className="btn  bg-gradient-to-r from-slate-50 to-zinc-200 text-gray-800 border-none hover:from-slate-100 hover:to-zinc-300">Sign up</a>
      </div>
    </div>
  );
};

export default Navbar;
