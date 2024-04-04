'use client';
import { LINKS } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToDocumentById = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <header className="sticky top-0 z-[100] flex w-full justify-center bg-blue-dark md:h-16">
      <nav className="container flex items-center py-3 max-lg:px-5">
        <button onClick={() => scrollToDocumentById('about')}>
          <Image
            src="/assets/images/logo.png"
            width={85}
            height={44}
            style={{ height: 44, width: 85 }}
            quality={100}
            alt="logo"
            priority={true}
          />
        </button>

        <div
          className="absolute right-8 top-5 ml-auto block cursor-pointer lg:hidden"
          onClick={() => toggleMenu()}
        >
          <div>
            <div className="h-1 w-8 rounded-full bg-white"></div>
            <div className="mt-1 h-1 w-8 rounded-full bg-white"></div>
            <div className="mt-1 h-1 w-8 rounded-full bg-white"></div>
          </div>
        </div>

        <ul
          className={`absolute left-0 w-full flex-1 bg-blue-dark pl-5 lg:static lg:flex lg:items-center lg:justify-end ${
            isMenuOpen ? 'top-16' : 'top-[-490px]'
          } `}
        >
          <li className="menu-item">
            <Link
              className="text-yellow"
              href="https://sway.cloud.microsoft/WrM6W2SYt01arQzT?fbclid=IwAR0lwVqsjsTY4qNewQuUnx24ELKHWkbDLcU7HdUmNk-q7UFjY9tOPJ9Bn48_aem_ATnKq9BHl2qnqFOSmmk51ITx4BJdW8f0rQrguqjjRC-F_XRoSx1Vnf9jwrT4EQYc9EoBogQCL6OokKg2rq1G_LfC"
              rel="noopener noreferrer"
              target="_blank"
            >
              Cycling Challenge
            </Link>
          </li>
          {LINKS.map((link) => (
            <li key={link.id} className="menu-item">
              <button onClick={() => scrollToDocumentById(link.id)}>
                {link.name}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
