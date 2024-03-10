import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaDribbble, FaFacebook, FaTwitter } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  // navItems
  const navItems = [
    {
      path: "/",
      link: "home",
    },

    {
      path: "/blogs",
      link: "blogs",
    },
  ];

  return (
    <header className="bg-black text-white fixed top-0 left-0 right-0">
      <nav className="px-4 py-4 max-w-6xl mx-auto flex justify-between items-center">
        {/* navItem */}
        <ul className="md:flex hidden gap-12 text-lg capitalize">
          {navItems.map(({ path, link }) => (
            <li key={path} className="text-white">
              <NavLink
                to={path}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {link}
              </NavLink>
            </li>
          ))}
        </ul>
        {/* menu icons */}
        <div className="text-white lg:flex hidden gap-4 items-center">
          <button
            type="button"
            className="bg-orange-500 font-medium rounded hover:bg-white hover:text-orange-500 px-6 py-2  transition_all"
          >
            Log In
          </button>
        </div>

        {/* toggle button */}
        <div className="md:hidden block">
          <button onClick={() => setToggle((prev) => !prev)}>
            {toggle ? (
              <IoClose className="w-5 h-5" />
            ) : (
              <FaBars className="w-5 h-5" />
            )}
          </button>
        </div>
      </nav>
      {/* responsive menus */}
      <div>
        <ul
          className={`md:hidden gap-12 text-lg capitalize block space-y-4 px-4 py-6 bg-white ${
            toggle ? "fixed top-20 left-0 w-full transition_all" : "hidden"
          }`}
        >
          {navItems.map(({ path, link }) => (
            <li key={path} className="text-black">
              <NavLink to={path} onClick={() => setToggle((prev) => !prev)}>
                {link}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};
export default Navbar;
