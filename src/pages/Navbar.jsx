import React, { useState } from 'react';
import { IoMdMenu } from 'react-icons/io';
import { AiOutlineClose } from 'react-icons/ai';
import { FaPlay, FaInstagram, FaFacebook } from 'react-icons/fa';
import Logo from '../assets/favicon.jpg';

const NavbarLink = ({ href, text }) => (
  <a href={href} className="text-white px-3 py-2 text-base font-regular hover:text-orange-400">
    {text}
  </a>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const links = [
    { href: '#', text: 'Início' },
    { href: '#', text: 'Sobre' },
    { href: '#', text: 'Horários' },
    { href: '#', text: 'Ministérios' },
    { href: '#', text: 'Células' }
  ];

  return (
    <nav className="bg-black fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-2">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img src={Logo} alt="HolyFire" className="h-8 w-8 rounded-full" />
            </div>
            <div className="ml-4 text-white text-lg font-semibold">HolyFire</div>
          </div>
          <div className="hidden lg:block">
            <div className="ml-2 flex items-baseline space-x-4">
              {links.map((link, index) => (
                <NavbarLink key={index} href={link.href} text={link.text} />
              ))}
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex">
              <button className="bg-orange-600 text-white flex items-center justify-center px-4 py-2 rounded-full text-sm font-medium focus:outline-none">
                <FaPlay className="inline-block w-3 h-3 mr-1" /> Ao Vivo
              </button>
            </div>
            <div className="hidden lg:flex ml-2">
              <button className="bg-orange-600 text-white flex items-center justify-center px-6 py-2 rounded-full text-sm font-medium focus:outline-none">
                Doações
              </button>
            </div>
            <div className="hidden lg:flex items-center justify-center space-x-4">
              <a href="#" className="text-orange-600">
                <FaInstagram className="text-xl hover:text-orange-400" />
              </a>
              <a href="#" className="text-orange-600">
                <FaFacebook className="text-xl hover:text-orange-400" />
              </a>
            </div>
          </div>
          <div className="-mr-2 flex lg:hidden">
            <button onClick={toggleMenu} className="inline-flex items-center justify-center p-2 rounded-md text-white  focus:ring-white" aria-expanded="false">
              {isOpen ? <AiOutlineClose className="block h-6 w-6" aria-hidden="true" /> : <IoMdMenu className="block h-8 w-8" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="lg:hidden fixed top-16 left-0 w-full bg-black z-20" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col"> {/* Adicionando flex-col aqui */}
            {links.map((link, index) => (
              <NavbarLink key={index} href={link.href} text={link.text} />
            ))}
            <div className="flex">
              <button className="bg-orange-600 text-white flex items-center justify-center px-4 py-2 rounded-full text-sm font-medium focus:outline-none">
                <FaPlay className="inline-block w-3 h-3 mr-1" /> Ao Vivo
              </button>
            </div>
            <div className="flex">
              <button className="bg-orange-600 text-white flex items-center justify-center px-6 py-2 rounded-full text-sm font-medium focus:outline-none">
                Doações
              </button>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <a href="#" className="text-orange-600">
                <FaInstagram className="text-xl hover:text-orange-400" />
              </a>
              <a href="#" className="text-orange-600">
                <FaFacebook className="text-xl hover:text-orange-400" />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
