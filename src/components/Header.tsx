import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import logo from '../assets/favicon.png';

const Header: React.FC = () => {
  const [isAboutMenuOpen, setIsAboutMenuOpen] = useState(false);
  const [isContentMenuOpen, setIsContentMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    return () => {
      clearTimeout(aboutMenuTimeout);
      clearTimeout(contentMenuTimeout);
    };
  }, );

  let aboutMenuTimeout: number;
  let contentMenuTimeout: number;

  const handleMouseEnterAbout = () => {
    clearTimeout(aboutMenuTimeout);
    setIsAboutMenuOpen(true);
  };

  const handleMouseLeaveAbout = () => {
    aboutMenuTimeout = setTimeout(() => {
      setIsAboutMenuOpen(false);
    }, 300);
  };

  const handleMouseEnterContent = () => {
    clearTimeout(contentMenuTimeout);
    setIsContentMenuOpen(true);
  };

  const handleMouseLeaveContent = () => {
    contentMenuTimeout = setTimeout(() => {
      setIsContentMenuOpen(false);
    }, 300);
  };

  return (
    <header className="bg-black fixed z-10 w-full text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center">
          <img src={logo} alt="Holyfire Logo" className="h-10 w-10 rounded-full mr-2" />
          <span className="text-2xl font-semibold">Holyfire</span>
        </div>
        <nav className="hidden md:flex space-x-8">
          <NavItem
            label="Sobre Nós"
            isMenuOpen={isAboutMenuOpen}
            handleMouseEnter={handleMouseEnterAbout}
            handleMouseLeave={handleMouseLeaveAbout}
            links={[
              { label: 'Quem Somos', href: '#' },
              { label: 'Nossa Equipe', href: '#' },
              { label: 'Células', href: '#' },
            ]}
          />
          <NavLink href="#" label="Agenda" />
          <NavItem
            label="Conteúdo"
            isMenuOpen={isContentMenuOpen}
            handleMouseEnter={handleMouseEnterContent}
            handleMouseLeave={handleMouseLeaveContent}
            links={[
              { label: 'Cultos', href: '#' },
              { label: 'Séries', href: '#' },
              { label: 'Treinamentos', href: '#' },
              { label: 'Especiais', href: '#' },
            ]}
          />
          <NavLink href="#" label="Contribua" />
          <NavLink href="#" label="Contato" />
        </nav>
        <button
          className={`md:hidden transform transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-180' : 'rotate-0'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <FaTimes className="h-6 w-6" />
          ) : (
            <FaBars className="h-6 w-6" />
          )}
        </button>
      </div>
      {isMobileMenuOpen && (
        <MobileMenu
          isAboutMenuOpen={isAboutMenuOpen}
          setIsAboutMenuOpen={setIsAboutMenuOpen}
          isContentMenuOpen={isContentMenuOpen}
          setIsContentMenuOpen={setIsContentMenuOpen}
        />
      )}
    </header>
  );
};

const NavItem: React.FC<{
  label: string;
  isMenuOpen: boolean;
  handleMouseEnter: () => void;
  handleMouseLeave: () => void;
  links: { label: string, href: string }[];
}> = ({ label, isMenuOpen, handleMouseEnter, handleMouseLeave, links }) => (
  <div
    className="relative group"
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
  >
    <button className="relative text-white hover:text-orange-400 transition duration-300">
      {label}
      <span className="absolute left-0 bottom-0 w-full h-0.5 bg-orange-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-center duration-300"></span>
    </button>
    {isMenuOpen && (
      <div className="absolute mt-4 w-48 bg-black">
        {links.map(link => (
          <div className="group" key={link.label}>
            <a href={link.href} className="block px-6 py-2 text-white hover:bg-orange-400 transition duration-300">
              {link.label}
            </a>
          </div>
        ))}
      </div>
    )}
  </div>
);

const NavLink: React.FC<{ href: string, label: string }> = ({ href, label }) => (
  <a href={href} className="relative group text-white hover:text-orange-400 transition duration-300">
    {label}
    <span className="absolute left-0 bottom-0 w-full h-0.5 bg-orange-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-center duration-300"></span>
  </a>
);

const MobileMenu: React.FC<{
  isAboutMenuOpen: boolean;
  setIsAboutMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isContentMenuOpen: boolean;
  setIsContentMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({
  isAboutMenuOpen,
  setIsAboutMenuOpen,
  isContentMenuOpen,
  setIsContentMenuOpen
}) => (
  <div className="md:hidden bg-black">
    <MobileMenuItem
      label="Sobre Nós"
      isOpen={isAboutMenuOpen}
      setIsOpen={setIsAboutMenuOpen}
      links={[
        { label: 'Quem Somos', href: '#' },
        { label: 'Nossa Equipe', href: '#' },
        { label: 'Células', href: '#' },
      ]}
    />
    <MobileNavLink href="#" label="Agenda" />
    <MobileMenuItem
      label="Conteúdo"
      isOpen={isContentMenuOpen}
      setIsOpen={setIsContentMenuOpen}
      links={[
        { label: 'Cultos', href: '#' },
        { label: 'Séries', href: '#' },
        { label: 'Treinamentos', href: '#' },
        { label: 'Especiais', href: '#' },
      ]}
    />
    <MobileNavLink href="#" label="Contribua" />
    <MobileNavLink href="#" label="Contato" />
  </div>
);

const MobileMenuItem: React.FC<{
  label: string;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  links: { label: string, href: string }[];
}> = ({ label, isOpen, setIsOpen, links }) => (
  <div className="relative border-t border-gray-700">
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="flex justify-between w-full text-left px-4 py-2 text-white hover:bg-orange-400 transition duration-300"
    >
      {label}
      <FaChevronDown className={`ml-2 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`} />
    </button>
    {isOpen && (
      <div className="bg-black border-t border-gray-700">
        {links.map(link => (
          <div className="group" key={link.label}>
            <a href={link.href} className="block px-4 py-2 text-white hover:bg-orange-400 transition duration-300">
              {link.label}
            </a>
          </div>
        ))}
      </div>
    )}
  </div>
);

const MobileNavLink: React.FC<{ href: string, label: string }> = ({ href, label }) => (
  <div className="border-t border-gray-700">
    <a href={href} className="block px-4 py-2 text-white hover:bg-orange-400 transition duration-300">{label}</a>
  </div>
);

export default Header;
