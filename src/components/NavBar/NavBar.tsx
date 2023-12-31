import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaTimes } from "react-icons/fa";

import styles from "./navBar.module.css";

export default function NavBar() {
  // State to handle mobile navigation visibility
  const [nav, setNav] = useState(false);

  // Function to toggle mobile navigation visibility
  const handeleClick = () => setNav(!nav);

  return (
    <nav className={styles.global_nav}>
      <h1 className={styles.nav_title}>Global Warming</h1>
      <ul className={styles.main_list}>
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
          <li>Arctic ICE</li>
        </Link>
        <Link to={"/"}>
          <li>Home</li>
        </Link>
      </ul>

      {/* Handle hamburger icon */}
      <div className={styles.burger_icon} onClick={handeleClick}>
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
          <li className={styles.mobile_list}>Temperature</li>
        </Link>
        <Link to={"/co2"}>
          <li className={styles.mobile_list}>Co2</li>
        </Link>
        <Link to={"/nitrous"}>
          <li className={styles.mobile_list}>Nitrous</li>
        </Link>
        <Link to={"/methane"}>
          <li className={styles.mobile_list}>Methane</li>
        </Link>
        <Link to={"/arctic"}>
          <li className={styles.mobile_list}>Arctic ICE</li>
        </Link>
        <Link to={"/"}>
          <li className={styles.mobile_list}>Home</li>
        </Link>
      </ul>
    </nav>
  );
}
