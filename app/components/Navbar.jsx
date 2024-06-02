"use client";
import React, { useState, useEffect } from "react";
import fetchData from "../utils";
import Logo from "../components/Logo";

function Navbar() {
  const [navData, setNavData] = useState([]);

  useEffect(() => {
    fetchData().then((data) => setNavData(data.navbar));
  }, []);

  return (
    <nav className='flex list-none items-center justify-between px-[6rem] p-[2rem]'>
      <div className='nav-list flex items-center gap-2'>
        <Logo />
        {navData.map((elem, i) => (
          <li
            className='hover:text-[#ff5655] hover:font-bold font-normal cursor-pointer'
            key={i}
          >
            {elem}
          </li>
        ))}
      </div>
      <input
        type='button'
        value='Download'
        className='bg-black text-white font-thin p-3 rounded-sm px-[2rem]'
      />
    </nav>
  );
}

export default Navbar;
