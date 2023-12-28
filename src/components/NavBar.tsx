import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaTimes } from "react-icons/fa";

export default function NavBar() {
  // Nav is starting off false
  const [nav, setNav] = useState(false);

  const handeleClick = () => setNav(!nav);

  return (
    <nav className=" relative z-10 flex items-center justify-between border-b border-black bg-slate-100 p-5 drop-shadow-xl">
      <h1 className="text-2xl">Global Warming</h1>
      <ul className="hidden gap-6 md:flex">
        <Link to={"/temperature"}>
          <li>Temperature</li>
        </Link>
        <Link to={"/co2"}>
          <li>Co2</li>
        </Link>
        <Link to={"/nitrous"}>
          <li>Nitrous</li>
        </Link>
        <Link to={"/methane"}>
          <li>Methane</li>
        </Link>
        <Link to={"/arctic"}>
          <li>Artic ICE</li>
        </Link>
        <Link to={"/"}>
          <li>Home</li>
        </Link>
      </ul>
      {/* Handle hamburger icon */}
      <div className="z-20 md:hidden" onClick={handeleClick}>
        {nav ? (
          <FaTimes size={25} color="white" />
        ) : (
          <RxHamburgerMenu size={25} />
        )}
      </div>

      {/* Start mobile menu */}
      <ul
        className={`${
          nav
            ? "translate-x-0 transform text-white opacity-100"
            : "-translate-y-full transform opacity-0"
        } text absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center bg-zinc-900/80 text-2xl font-bold transition-transform `}
        onClick={() => setNav(false)}
      >
        <Link to={"/temperature"}>
          <li className="p-2 hover:text-blue-700">Temperature</li>
        </Link>
        <Link to={"/co2"}>
          <li className="p-2 hover:text-blue-700">Co2</li>
        </Link>
        <Link to={"/nitrous"}>
          <li className="p-2 hover:text-blue-700">Nitrous</li>
        </Link>
        <Link to={"/methane"}>
          <li className="p-2 hover:text-blue-700">Methane</li>
        </Link>
        <Link to={"/arctic"}>
          <li className="p-2 hover:text-blue-700">Artic ICE</li>
        </Link>
        <Link to={"/"}>
          <li className="p-2 hover:text-blue-700">Home</li>
        </Link>
      </ul>
    </nav>
  );
}
