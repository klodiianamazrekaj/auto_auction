"use client";

import React from "react";

//icons
import { RiAuctionLine } from "react-icons/ri";
import Search from "./Search";
import Logo from "./Logo";

export default function Navbar() {
  console.log("Client component");
  return (
    <header
      className="sticky top-0 z-50 flex justify-between 
                bg-white p-5 items-center text-gray-800 shadow-md"
    >
      <Logo />
      <Search />
      <div>Login</div>
    </header>
  );
}
