import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuIcon, XIcon } from "@heroicons/react/solid";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-indigo-200 p-3">
      <div onClick={() => setOpen(!open)} className="w-8 h-9 md:hidden">
        {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
      </div>
      <div
        className={`text-2xl md:flex justify-center w-full bg-indigo-200 absolute md:static duration-500 ease-in ${
          open ? "top-6" : "top-[-130px]"
        }`}
      >
        <Link className="mr-5 block " to={"/"}>
          Home
        </Link>
        <Link className="mr-5 block " to={"/reviews"}>
          Reviews
        </Link>
        <Link className="mr-5 block " to={"/dashboard"}>
          Dashboard
        </Link>
        <Link className="mr-5 block " to={"/about"}>
          About
        </Link>
      </div>
    </nav>
  );
};

export default Header;
