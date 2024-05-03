"use client"

import { User, onAuthStateChanged } from "firebase/auth";
import Link from "next/link";
import React, { useEffect, useState } from "react";


const Navbar = () => {
  const [user, setUser] = useState<User>()
  const [loading, setLoading] = useState<boolean>(true)

  return (
    <nav className="flex text-white font-semibold p-4 justify-between items-center h-16 bg-theme-color-2">
      {/* <Image alt="Robot Logo" src={RobotLogo} height={60} width={60} /> */}
      <div className="flex gap-4 uppercase text-xl items-center  text-theme-color-2 justify-center">
        <Link
          className="p-2 transition bg-theme-color-4 rounded-sm hover:scale-110 hover:-rotate-6"
          href="/"
        >
          🏠Home🏠
        </Link>
        <Link
          className="p-2 transition bg-theme-color-4 rounded-sm hover:scale-110 hover:-rotate-6"
          href="/daffodilians"
        >
          💐Daffodilians💐
        </Link>
        <Link
          className="p-2 transition bg-theme-color-4 rounded-sm hover:scale-110 hover:-rotate-6"
          href="/teachers"
        >
          👨‍🏫Teachers👨‍🏫
        </Link>
        <Link
          className="p-2 transition bg-theme-color-4 rounded-sm hover:scale-110 hover:-rotate-6"
          href="/more"
        >
          🔎More🔎
        </Link>
      </div>
      <div className="flex gap-4 uppercase text-xl items-center  text-theme-color-2 justify-center">
      {user ?
      <Link
      className="p-2 transition bg-theme-color-4 rounded-sm hover:scale-110 hover:-rotate-6"
      href="/profile"
    >
      {loading ? "Loading..." : "👔Profile👔"}
    </Link>
       : <Link
          className="p-2 transition bg-theme-color-4 rounded-sm hover:scale-110 hover:-rotate-6"
          href="/"
        >
          {loading ? "Loading..." : "🚪Login🚪"}
        </Link>}
        </div>
    </nav>
  );
};

export default Navbar;
