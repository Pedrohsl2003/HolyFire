import React, { useState, useRef } from 'react';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import logo from '../assets/favicon.png';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isAboutMenuOpen, setIsAboutMenuOpen] = useState(false);
  const [isContentMenuOpen, setIsContentMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const aboutMenuTimeoutRef = useRef<number | null>(null);
  const contentMenuTimeoutRef = useRef<number | null>(null);

  const handleMouseEnterAbout = () => {
    if (aboutMenuTimeoutRef.current) {
      clearTimeout(aboutMenuTimeoutRef.current);
    }
    setIsAboutMenuOpen(true);
  };

  const handleMouseLeaveAbout = () => {
    aboutMenuTimeoutRef.current = window.setTimeout(() => {
      setIsAboutMenuOpen(false);
    }, 300);
  };

  const handleMouseEnterContent = () => {
    if (contentMenuTimeoutRef.current) {
      clearTimeout(contentMenuTimeoutRef.current);
    }
    setIsContentMenuOpen(true);
  };

  const handleMouseLeaveContent = () => {
    contentMenuTimeoutRef.current = window.setTimeout(() => {
      setIsContentMenuOpen(false);
    }, 300);
  };

  return (
    <header className="bg-black fixed z-10 w-full text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Holyfire Logo" className="h-10 w-10 rounded-full mr-2" />
            <span className="text-2xl font-semibold">Holyfire</span>
          </Link>
        </div>
        <nav className="hidden md:flex space-x-8">
          <NavItem
            label="Sobre Nós"
            isMenuOpen={isAboutMenuOpen}
            handleMouseEnter={handleMouseEnterAbout}
            handleMouseLeave={handleMouseLeaveAbout}
            links={[
              { label: 'Quem Somos', href: '/quem-somos' },
              { label: 'Nossa Equipe', href: '/nossa-equipe' },
              { label: 'Células', href: '/celulas' },
            ]}
          />
          <NavLink href="/agenda" label="Agenda" />
          <NavItem
            label="Conteúdo"
            isMenuOpen={isContentMenuOpen}
            handleMouseEnter={handleMouseEnterContent}
            handleMouseLeave={handleMouseLeaveContent}
            links={[
              { label: 'Cultos', href: '/content/cultos' },
              { label: 'Séries', href: '/content/series' },
              { label: 'Treinamentos', href: '/content/treinamentos' },
              { label: 'Especiais', href: '/content/especiais' },
            ]}
          />
          <NavLink href="/contribua" label="Contribua" />
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
      <div className="absolute mt-2 w-48 bg-black">
        {links.map(link => (
          <a
            href={link.href}
            key={link.label}
            className="block px-4 py-2 text-white border-b border-gray-700 hover:bg-orange-400 transition duration-300"
          >
            {link.label}
          </a>
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
        { label: 'Quem Somos', href: '/quem-somos' },
        { label: 'Nossa Equipe', href: '/nossa-equipe' },
        { label: 'Células', href: '/celulas' },
      ]}
    />
    <MobileNavLink href="/agenda" label="Agenda" />
    <MobileMenuItem
      label="Conteúdo"
      isOpen={isContentMenuOpen}
      setIsOpen={setIsContentMenuOpen}
      links={[
        { label: 'Cultos', href: '/content/cultos' },
        { label: 'Séries', href: '/content/series' },
        { label: 'Treinamentos', href: '/content/treinamentos' },
        { label: 'Especiais', href: '/content/especiais' },
      ]}
    />
    <MobileNavLink href="/contribua" label="Contribua" />
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
      <div className="bg-black">
        {links.map(link => (
          <a
            href={link.href}
            key={link.label}
            className="block px-4 py-2 text-white border-b border-gray-700 hover:bg-orange-400 transition duration-300"
          >
            {link.label}
          </a>
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
