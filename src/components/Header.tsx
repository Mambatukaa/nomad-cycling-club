"use client";
import { LINKS } from "@/contants";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-[100] flex w-full justify-center bg-blue-dark md:h-16">
      <nav className="container flex items-center py-3 max-sm:px-5">
        <Image
          src="/assets/images/logo.png"
          width={80}
          height={80}
          alt="logo"
        />

        <div
          className="absolute right-8 top-5 ml-auto block cursor-pointer md:hidden"
          onClick={() => toggleMenu()}
        >
          <div>
            <div className="h-1 w-8 rounded-full bg-white"></div>
            <div className="mt-1 h-1 w-8 rounded-full bg-white"></div>
            <div className="mt-1 h-1 w-8 rounded-full bg-white"></div>
          </div>
        </div>

        <ul
          className={` absolute left-0 w-full flex-1 bg-blue-dark pl-5 md:static md:flex md:items-center md:justify-end ${
            isMenuOpen ? "top-16" : "top-[-490px]"
          } `}
        >
          {LINKS.map((link) => (
            <li key={link.url} className="menu-item">
              <Link href={link.url}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
