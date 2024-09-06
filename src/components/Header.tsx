import React, { useState, useRef } from 'react';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import logo from '../assets/favicon.png';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isAboutMenuOpen, setIsAboutMenuOpen] = useState(false);
  const [isContentMenuOpen, setIsContentMenuOpen] = useState(false);
  const [isContactMenuOpen, setIsContactMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const aboutMenuTimeoutRef = useRef<number | null>(null);
  const contentMenuTimeoutRef = useRef<number | null>(null);
  const contactMenuTimeoutRef = useRef<number | null>(null);

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

  const handleMouseEnterContact = () => {
    if (contactMenuTimeoutRef.current) {
      clearTimeout(contactMenuTimeoutRef.current);
    }
    setIsContactMenuOpen(true);
  };

  const handleMouseLeaveContact = () => {
    contactMenuTimeoutRef.current = window.setTimeout(() => {
      setIsContactMenuOpen(false);
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
              { label: 'Nossa Sede', href: '/nossa-sede' }, 
            ]}
          />
          <NavLink to="/agenda" label="Agenda" />
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
          <NavLink to="/contribua" label="Contribua" />
          <NavItem
            label="Contato"
            isMenuOpen={isContactMenuOpen}
            handleMouseEnter={handleMouseEnterContact}
            handleMouseLeave={handleMouseLeaveContact}
            links={[
              { label: 'Fale Conosco', href: '/fale-conosco' },
              { label: 'Voluntários', href: '/voluntarios' },
            ]}
            dropdownClass="right-0"
          />
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
          isContactMenuOpen={isContactMenuOpen}
          setIsContactMenuOpen={setIsContactMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}   
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
  dropdownClass?: string;
}> = ({ label, isMenuOpen, handleMouseEnter, handleMouseLeave, links, dropdownClass }) => (
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
      <div className={`absolute mt-2 w-48 bg-black ${dropdownClass}`}>
        {links.map(link => (
          <Link
            to={link.href}
            key={link.label}
            className="block px-4 py-2 text-white border-b border-gray-700 hover:bg-orange-400 transition duration-300"
          >
            {link.label}
          </Link>
        ))}
      </div>
    )}
  </div>
);

const NavLink: React.FC<{ to: string, label: string }> = ({ to, label }) => (
  <Link to={to} className="relative group text-white hover:text-orange-400 transition duration-300">
    {label}
    <span className="absolute left-0 bottom-0 w-full h-0.5 bg-orange-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-center duration-300"></span>
  </Link>
);

const MobileMenu: React.FC<{
  isAboutMenuOpen: boolean;
  setIsAboutMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isContentMenuOpen: boolean;
  setIsContentMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isContactMenuOpen: boolean;
  setIsContactMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({
  isAboutMenuOpen,
  setIsAboutMenuOpen,
  isContentMenuOpen,
  setIsContentMenuOpen,
  isContactMenuOpen,
  setIsContactMenuOpen,
  setIsMobileMenuOpen
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
        { label: 'Nossa Sede', href: '/nossa-sede' }, 
      ]}
      setIsMobileMenuOpen={setIsMobileMenuOpen}
    />
    <MobileNavLink to="/agenda" label="Agenda" setIsMobileMenuOpen={setIsMobileMenuOpen} />
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
      setIsMobileMenuOpen={setIsMobileMenuOpen}
    />
    <MobileNavLink to="/contribua" label="Contribua" setIsMobileMenuOpen={setIsMobileMenuOpen} />
    <MobileMenuItem
      label="Contato"
      isOpen={isContactMenuOpen}
      setIsOpen={setIsContactMenuOpen}
      links={[
        { label: 'Fale Conosco', href: '/fale-conosco' },
        { label: 'Voluntários', href: '/voluntarios' },
      ]}
      setIsMobileMenuOpen={setIsMobileMenuOpen}
    />
  </div>
);

const MobileNavLink: React.FC<{ to: string, label: string, setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>> }> = ({ to, label, setIsMobileMenuOpen }) => (
  <div className="border-t border-gray-700">
    <Link
      to={to}
      className="block px-4 py-2 text-white hover:bg-orange-400 transition duration-300"
      onClick={() => setIsMobileMenuOpen(false)} 
    >
      {label}
    </Link>
  </div>
);

const MobileMenuItem: React.FC<{
  label: string;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  links: { label: string, href: string }[];
  setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ label, isOpen, setIsOpen, links, setIsMobileMenuOpen }) => (
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
          <Link
            to={link.href}
            key={link.label}
            className="block px-4 py-2 text-white border-b border-gray-700 hover:bg-orange-400 transition duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {link.label}
          </Link>
        ))}
      </div>
    )}
  </div>
);

export default Header;
