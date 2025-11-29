import Link from 'next/link';
import Image from 'next/image';

export default function MissionSection() {
    return (
        <section className="mb-16 bg-gray-50 p-8 rounded-lg animate-fade-in border border-gray-200">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">La Misión del Proyecto</h2>
            <p className="text-gray-700 mb-6">
                Facultades UNP nace para cerrar la brecha de información digital en nuestro campus.
                Esta iniciativa busca proveer a los estudiantes herramientas modernas de navegación
                y consulta académica, centralizando datos que antes estaban dispersos en múltiples
                fuentes no oficiales.
            </p>
            <p className="text-gray-600 mb-6">
                El proyecto responde a una necesidad real: la falta de un sistema unificado que
                permita a la comunidad universitaria acceder fácilmente a información actualizada
                sobre facultades, escuelas profesionales y programas académicos.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
                <Link
                    href="https://devsandoval.me"
                    target="_blank"
                    className="px-6 py-2 bg-blue-600 hover:bg-blue-700 transition-colors duration-300 rounded-md text-white hover-lift"
                >
                    Conoce al Desarrollador
                </Link>
            </div>

            <h3 className="text-xl font-bold mb-4 text-gray-800">Conecta con el Proyecto</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                <a
                    href="https://instagram.com/dev.sandoval"
                    target="_blank"
                    className="flex flex-col items-center justify-center gap-2 px-4 py-3 border border-gray-200 rounded-lg hover:border-pink-500 hover:bg-pink-50 transition-all duration-300 group"
                    rel="noopener noreferrer"
                >
                    <Image
                        src="/images/social/instagram.svg"
                        width={24}
                        height={24}
                        alt="Instagram"
                        className="opacity-70 group-hover:opacity-100 transition-opacity"
                    />
                    <span className="text-sm font-medium text-gray-600 group-hover:text-pink-600">
                        Instagram
                    </span>
                </a>
                <a
                    href="https://facebook.com/devsandoval.web"
                    target="_blank"
                    className="flex flex-col items-center justify-center gap-2 px-4 py-3 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all duration-300 group"
                    rel="noopener noreferrer"
                >
                    <Image
                        src="/images/social/facebooksvg.svg"
                        width={24}
                        height={24}
                        alt="Facebook"
                        className="opacity-70 group-hover:opacity-100 transition-opacity"
                    />
                    <span className="text-sm font-medium text-gray-600 group-hover:text-blue-600">
                        Facebook
                    </span>
                </a>
                <a
                    href="https://linkedin.com/in/devsandoval"
                    target="_blank"
                    className="flex flex-col items-center justify-center gap-2 px-4 py-3 border border-gray-200 rounded-lg hover:border-blue-700 hover:bg-blue-50 transition-all duration-300 group"
                    rel="noopener noreferrer"
                >
                    <Image
                        src="/images/social/linkedin.svg"
                        width={24}
                        height={24}
                        alt="LinkedIn"
                        className="opacity-70 group-hover:opacity-100 transition-opacity"
                    />
                    <span className="text-sm font-medium text-gray-600 group-hover:text-blue-700">
                        LinkedIn
                    </span>
                </a>
                <a
                    href="https://github.com/dev-sandoval"
                    target="_blank"
                    className="flex flex-col items-center justify-center gap-2 px-4 py-3 border border-gray-200 rounded-lg hover:border-gray-800 hover:bg-gray-50 transition-all duration-300 group"
                    rel="noopener noreferrer"
                >
                    <Image
                        src="/images/social/github.svg"
                        width={24}
                        height={24}
                        alt="GitHub"
                        className="opacity-70 group-hover:opacity-100 transition-opacity"
                    />
                    <span className="text-sm font-medium text-gray-600 group-hover:text-gray-900">
                        GitHub
                    </span>
                </a>
                <a
                    href="https://twitter.com/dev_sandoval"
                    target="_blank"
                    className="flex flex-col items-center justify-center gap-2 px-4 py-3 border border-gray-200 rounded-lg hover:border-blue-400 hover:bg-blue-50 transition-all duration-300 group"
                    rel="noopener noreferrer"
                >
                    <Image
                        src="/images/social/x.svg"
                        width={24}
                        height={24}
                        alt="X"
                        className="opacity-70 group-hover:opacity-100 transition-opacity"
                    />
                    <span className="text-sm font-medium text-gray-600 group-hover:text-blue-500">
                        Twitter
                    </span>
                </a>
            </div>
        </section>
    );
}
