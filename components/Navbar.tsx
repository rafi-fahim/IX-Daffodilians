"use client";

import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [menuOn, isMenuOn] = useState<boolean>(false);
  const { isSignedIn, user, isLoaded } = useUser();

  return (
    <nav className="flex text-white font-semibold p-4 justify-between items-center h-16 bg-theme-color-2">
      {/* <Image alt="Robot Logo" src={RobotLogo} height={60} width={60} /> */}
      {/* Pc Nav */}
      <div className="flex gap-4 uppercase text-xl items-center  text-theme-color-2 justify-center">
        <Link
          className="p-2 transition max-sm:hidden bg-theme-color-4 rounded-sm hover:scale-110 hover:-rotate-6"
          href="/"
        >
          🏠Home🏠
        </Link>
        <Link
          className="p-2 transition max-sm:hidden bg-theme-color-4 rounded-sm hover:scale-110 hover:-rotate-6"
          href="/daffodilians"
        >
          💐Daffodilians💐
        </Link>
        <Link
          className="p-2 transition max-sm:hidden bg-theme-color-4 rounded-sm hover:scale-110 hover:-rotate-6"
          href="/teachers"
        >
          👨‍🏫Teachers👨‍🏫
        </Link>
        <Link
          className="p-2 transition max-sm:hidden bg-theme-color-4 rounded-sm hover:scale-110 hover:-rotate-6"
          href="/more"
        >
          🔎More🔎
        </Link>
        <button
          className="p-2 sm:hidden transition bg-theme-color-4 rounded-sm hover:scale-110 hover:-rotate-6"
          onClick={() => isMenuOn((prev) => !prev)}
        >
          📦Menu📦
        </button>
      </div>
      {/*----------------- Mobile Nav---------------------- */}
      <div
        className={`flex flex-col z-30 ${
          menuOn ? "block" : "hidden"
        } gap-4 uppercase text-xl bg-theme-color-2 center-absolute h-screen w-full fixed items-center transition  text-theme-color-2 justify-center`}
      >
        <Link
          className="p-2 transition w-[220px] text-center z-40 bg-theme-color-4 rounded-sm hover:scale-110 hover:-rotate-6"
          href="/"
        >
          🏠Home🏠
        </Link>
        <Link
          className="p-2 transition w-[220px] text-center z-40 bg-theme-color-4 rounded-sm hover:scale-110 hover:-rotate-6"
          href="/daffodilians"
        >
          💐Daffodilians💐
        </Link>
        <Link
          className="p-2 transition w-[220px] text-center z-40 bg-theme-color-4 rounded-sm hover:scale-110 hover:-rotate-6"
          href="/teachers"
        >
          👨‍🏫Teachers👨‍🏫
        </Link>
        <Link
          className="p-2 transition w-[220px] text-center z-40 bg-theme-color-4 rounded-sm hover:scale-110 hover:-rotate-6"
          href="/more"
        >
          🔎More🔎
        </Link>
        <button
          className="p-2 transition w-[220px] text-center z-40 bg-theme-color-4 rounded-sm hover:scale-110 hover:-rotate-6"
          onClick={() => isMenuOn((prev) => !prev)}
        >
          📦Menu📦
        </button>
      </div>

      {/* ----------------mobile nav ends------------- */}
      <div className="flex gap-4 uppercase text-xl items-center  text-theme-color-2 justify-center">
        {isSignedIn ? (
          <Link
            className="p-2 transition bg-theme-color-4 rounded-sm hover:scale-110 hover:-rotate-6"
            href="/profile"
          >
            👔Profile👔
          </Link>
        ) : (
          <Link
            className="p-2 transition bg-theme-color-4 rounded-sm hover:scale-110 hover:-rotate-6"
            href="/sign-in"
          >
            🚪Login🚪
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
