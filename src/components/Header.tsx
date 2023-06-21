"use client";

import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from 'next/link'

const Header: React.FC = () => {
  const pathname = usePathname();

  console.log(pathname, "ahahhaha");

  return (
    <header className="sticky top-0 z-50 flex h-16 justify-center bg-blue-dark">
      <nav className="container flex items-center">
        <Image
          src="/assets/images/logo.png"
          width={80}
          height={80}
          alt="logo"
        />

        <div className="flex flex-1 items-center justify-end">
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
