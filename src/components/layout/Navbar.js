'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useAdmin } from '@/hooks/useAdmin';
import LogoIcon from '@/components/icons/LogoIcon';
import { FacultiesIcon, PlusIcon } from '@/components/icons/NavigationIcons';
import { InfoIcon as AboutIcon } from '@/components/icons/StatusIcons';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [animateMenu, setAnimateMenu] = useState(false);
    const pathname = usePathname();

    // Efecto para detectar el scroll y aplicar estilos
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Cerrar el menú móvil cuando cambia la ruta
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    // Controla la animación del menú móvil
    const toggleMenu = () => {
        if (!isOpen) {
            setIsOpen(true);
            setTimeout(() => setAnimateMenu(true), 10);
        } else {
            setAnimateMenu(false);
            setTimeout(() => setIsOpen(false), 300);
        }
    };

    return (
        <nav
            className={`w-full fixed top-0 z-50 transition-all duration-300 bg-zinc-600/70 backdrop-blur-md text-white border-b border-white/10 ${
                scrolled ? 'shadow-lg' : 'shadow-sm'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    {/* Logo/Brand con icono educativo */}
                    <div className="flex items-center">
                        <Link
                            href="/"
                            className={`flex items-center hover:text-blue-600 transition duration-300 ${
                                pathname === '/' && 'text-blue-500'
                            }`}
                        >
                            <div className="flex items-center mr-2">
                                <LogoIcon className="w-8 h-8 text-blue-400" />
                            </div>
                            <div className="flex flex-col leading-none">
                                <h3 className="text-lg md:text-xl font-bold transition-colors duration-300 text-white">
                                    Facultades UNP
                                </h3>
                                <span className="text-xs font-bold hidden sm:block">
                                    Universidad Nacional de Piura
                                </span>
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Menu con indicador de página activa */}
                    <div className="hidden md:flex items-center space-x-1">
                        <Link
                            href="/faculties"
                            className={`relative px-3 py-2 rounded-md transition duration-300 ${
                                pathname === '/faculties'
                                    ? 'font-medium text-blue-400'
                                    : 'text-gray-300 hover:text-white hover:bg-zinc-700/50'
                            }`}
                        >
                            <span className="flex items-center">
                                <FacultiesIcon className="w-5 h-5 mr-1" />
                                Facultades
                            </span>
                            {pathname === '/faculties' && (
                                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400"></span>
                            )}
                        </Link>

                        <Link
                            href="/about"
                            className={`relative px-3 py-2 rounded-md transition duration-300 ${
                                pathname === '/about'
                                    ? 'font-medium text-blue-400'
                                    : 'text-gray-300 hover:text-white hover:bg-zinc-700/50'
                            }`}
                        >
                            <span className="flex items-center">
                                <AboutIcon className="w-5 h-5 mr-1" />
                                Acerca de
                            </span>
                            {pathname === '/about' && (
                                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400"></span>
                            )}
                        </Link>

                        <div className="h-6 mx-2 border-l border-gray-400 opacity-30"></div>

                        {useAdmin() && (
                            <Link
                                href="/new"
                                className="flex items-center px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-all duration-300 transform hover:scale-105"
                            >
                                <PlusIcon className="w-5 h-5 mr-1.5" />
                                <span>Nueva Facultad</span>
                            </Link>
                        )}
                    </div>

                    {/* Mobile Menu Button con animación mejorada */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMenu}
                            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
                            className="flex items-center justify-center w-10 h-10 rounded-full text-white hover:bg-zinc-700/50 transition-colors duration-300 focus:outline-none"
                        >
                            <div className="relative w-6 h-6">
                                <span
                                    className={`absolute h-0.5 w-6 bg-white transform transition-all duration-300 ${
                                        isOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'
                                    }`}
                                ></span>
                                <span
                                    className={`absolute h-0.5 w-6 bg-white transform transition-all duration-300 ${
                                        isOpen ? 'opacity-0' : 'opacity-100'
                                    }`}
                                ></span>
                                <span
                                    className={`absolute h-0.5 w-6 bg-white transform transition-all duration-300 ${
                                        isOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'
                                    }`}
                                ></span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu con animación de deslizamiento */}
            {isOpen && (
                <div
                    className={`md:hidden overflow-hidden transition-all duration-300 bg-zinc-900/90 backdrop-blur-md text-white border-t border-white/10 ${
                        animateMenu ? 'max-h-64' : 'max-h-0'
                    }`}
                    style={{ transition: 'max-height 300ms ease-in-out' }}
                >
                    <div className="px-4 pt-2 pb-4 space-y-1.5">
                        <Link
                            href="/faculties"
                            className={`block px-4 py-3 rounded-lg transition duration-200 ${
                                pathname === '/faculties'
                                    ? 'font-medium bg-zinc-700/70 text-blue-400'
                                    : 'hover:bg-zinc-700/50'
                            }`}
                        >
                            <span className="flex items-center">
                                <FacultiesIcon
                                    className={`w-5 h-5 mr-3 ${pathname === '/faculties' ? 'text-blue-400' : ''}`}
                                />
                                Facultades
                            </span>
                        </Link>

                        <Link
                            href="/about"
                            className={`block px-4 py-3 rounded-lg transition duration-200 ${
                                pathname === '/about'
                                    ? 'font-medium bg-zinc-700/70 text-blue-400'
                                    : 'hover:bg-zinc-700/50'
                            }`}
                        >
                            <span className="flex items-center">
                                <AboutIcon
                                    className={`w-5 h-5 mr-3 ${pathname === '/about' ? 'text-blue-400' : ''}`}
                                />
                                Acerca de
                            </span>
                        </Link>

                        <div className="border-t border-gray-200 dark:border-zinc-700 my-3 opacity-30"></div>

                        {useAdmin() && (
                            <Link
                                href="/new"
                                className={`flex items-center justify-center px-4 py-3 rounded-lg transition-all duration-300 text-white ${
                                    pathname === '/new'
                                        ? 'bg-blue-600 font-medium'
                                        : 'bg-blue-500 hover:bg-blue-600'
                                }`}
                            >
                                <PlusIcon className="w-5 h-5 mr-2" />
                                <span>Nueva Facultad</span>
                            </Link>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
