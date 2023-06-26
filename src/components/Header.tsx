"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="absolute top-0 z-50 flex h-16 w-full justify-center bg-blue-dark">
      <nav className="container flex items-center max-sm:px-5">
        <Image
          src="/assets/images/logo.png"
          width={80}
          height={80}
          alt="logo"
        />

        <div
          className="ml-auto block cursor-pointer md:hidden"
          onClick={() => toggleMenu()}
        >
          <div>
            <div className="h-1 w-8 rounded-full bg-white"></div>
            <div className="mt-1 h-1 w-8 rounded-full bg-white"></div>
            <div className="mt-1 h-1 w-8 rounded-full bg-white"></div>
          </div>
        </div>

        <div className="hidden flex-1 items-center justify-end md:flex">
          <Link className="menu-item" href="#about">
            Who we are
          </Link>
          <Link className="menu-item" href="#leaders">
            Leadership
          </Link>
          <Link className="menu-item" href="#gallery">
            Gallery
          </Link>
          <Link className="menu-item" href="#contact">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
