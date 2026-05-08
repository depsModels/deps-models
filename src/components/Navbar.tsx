'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
// import { TbWorld } from 'react-icons/tb'; // Descomentar para i18n

const navLinks = [
  { href: '/#home', label: 'Home' },
  { href: '/#services', label: 'Soluções' },
  { href: '/#portfolio', label: 'Projetos' },
  { href: '/#process', label: 'Processo' },
  { href: '/#faq', label: 'Dúvidas' },
  { href: '/#contact', label: 'Contato' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string>('#home');

  // TODO: Variáveis e funções comentadas para futura implementação de i18n
  /*
  const [currentLanguage, setCurrentLanguage] = useState('PT');
  const [isLangDropdownOpen, setLangDropdownOpen] = useState(false);
  const languages = ['PT', 'EN'];
  const langDropdownRef = useRef<HTMLDivElement>(null);

  const selectLanguage = (lang: string) => {
    setCurrentLanguage(lang);
    setLangDropdownOpen(false);
  };
  */

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // TODO: Efeito comentado para futura implementação de i18n
  /*
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langDropdownRef.current && !langDropdownRef.current.contains(event.target as Node)) {
        setLangDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  */

  return (
    <nav className={`absolute top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'backdrop-blur-md bg-transparent/5' : ''}`}>
      <div className="container mx-auto px-6">
        <div className="relative flex items-center justify-center h-24">
          {/* Logo */}
          <Link href="/" className="absolute left-0 flex items-center">
            <Image
              src="/logos/logo-icon-2.png"
              alt="DEPS Models Logo"
              width={100}
              height={100}
              priority
              className="w-[100px] h-auto"
              style={{ width: '100px', height: 'auto' }}
            />
          </Link>

          {/* Links de navegação */}
          <div
            className="hidden md:flex items-center space-x-2 bg-gray-800 rounded-lg px-6"
            onMouseLeave={() => setHoveredLink('#home')}
          >
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-base transition-colors ${hoveredLink === link.href ? 'text-white' : 'text-gray-400 hover:text-white'}`}
                onMouseEnter={() => setHoveredLink(link.href)}
              >
                {hoveredLink === link.href && (
                  <motion.div
                    className="absolute top-0 left-0 right-0 h-1 bg-blue-500"
                    layoutId="underline"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
                <span className="relative z-10 block px-4 py-3">{link.label}</span>
              </Link>
            ))}
          </div>

          {/* Seletor de Idioma Dropdown (Comentado para implementação futura de i18n) */}
          {/*
          <div className="absolute right-0 flex items-center">
            <div className="relative" ref={langDropdownRef}>
              <button
                onClick={() => setLangDropdownOpen(!isLangDropdownOpen)}
                className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors duration-200 p-2 rounded-lg hover:bg-white/10 cursor-pointer"
                aria-label="Mudar idioma"
              >
                <TbWorld className="w-5 h-5" />
                <span className="text-sm font-medium transition-all duration-300">
                  {currentLanguage}
                </span>
              </button>
              {isLangDropdownOpen && (
                <div className="absolute right-0 mt-2 w-full bg-gray-800 rounded-lg shadow-lg p-1">
                  {languages.map(lang => (
                    <button
                      key={lang}
                      onClick={() => selectLanguage(lang)}
                      className={`w-full flex justify-center items-center p-2 text-sm rounded-md ${currentLanguage === lang ? 'text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
          */}
        </div>
      </div>
    </nav>
  );
}
