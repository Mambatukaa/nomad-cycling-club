import React from "react";
import Image from "next/image";

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 flex justify-center bg-blue-primary">
      <nav className="flex h-14 items-center md:container">
        <Image
          src="/assets/images/logo.png"
          width={80}
          height={80}
          alt="logo"
        />

        <div className="flex flex-1 items-center justify-end">
          <a className="menu-item" href="#home">
            <span>Home</span>
          </a>
          <a className="menu-item" href="#gallery">
            <span>Leadership</span>
          </a>
          <a className="menu-item" href="#contact">
            <span>Contact</span>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
