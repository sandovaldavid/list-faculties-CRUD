import Link from 'next/link';
import LogoIcon from '@/components/icons/LogoIcon';
import { GitHubIcon, LinkedInIcon, GlobeIcon } from '@/components/icons/SocialIcons';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <LogoIcon className="w-8 h-8 text-blue-400" />
                            <h3 className="text-xl font-bold text-white">Facultades UNP</h3>
                        </div>
                        <p className="text-sm text-gray-400 leading-relaxed">
                            Sistema de gestión de facultades para la Universidad Nacional de Piura.
                            Encuentra información actualizada sobre todas las facultades y escuelas
                            profesionales.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Enlaces Rápidos</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="/faculties"
                                    className="text-gray-400 hover:text-blue-400 transition-colors"
                                >
                                    Ver Facultades
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/new"
                                    className="text-gray-400 hover:text-blue-400 transition-colors"
                                >
                                    Nueva Facultad
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/about"
                                    className="text-gray-400 hover:text-blue-400 transition-colors"
                                >
                                    Acerca de
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Developer Info */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Desarrollador</h4>
                        <p className="text-sm text-gray-400 mb-4">
                            Desarrollado por{' '}
                            <span className="text-white font-semibold">David Sandoval</span>{' '}
                            (sandovaldavid)
                        </p>
                        <div className="flex gap-4">
                            <a
                                href="https://github.com/sandovaldavid"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white transition-colors"
                                aria-label="GitHub"
                            >
                                <GitHubIcon className="w-6 h-6" />
                            </a>
                            <a
                                href="https://linkedin.com/in/jdsandovals"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white transition-colors"
                                aria-label="LinkedIn"
                            >
                                <LinkedInIcon className="w-6 h-6" />
                            </a>
                            <a
                                href="https://sandovaldavid.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white transition-colors"
                                aria-label="Portfolio"
                            >
                                <GlobeIcon className="w-6 h-6" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="text-sm text-gray-400 text-center md:text-left">
                            <p className="mb-1">
                                © {currentYear} Facultades UNP. Todos los derechos reservados.
                            </p>
                            <p className="text-xs text-gray-500">
                                <span className="font-semibold text-amber-400">
                                    Proyecto independiente no oficial.
                                </span>{' '}
                                No está afiliado con la Universidad Nacional de Piura.
                            </p>
                        </div>
                        <div className="flex gap-6 text-sm">
                            <Link
                                href="/about"
                                className="text-gray-400 hover:text-blue-400 transition-colors"
                            >
                                Acerca de
                            </Link>
                            <a
                                href="https://github.com/sandovaldavid/unp-campus-map"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-blue-400 transition-colors"
                            >
                                Código Fuente
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
