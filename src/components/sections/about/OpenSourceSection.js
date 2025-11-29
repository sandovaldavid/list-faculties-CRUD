import Image from 'next/image';
import LightbulbIcon from '@/components/icons/LightbulbIcon';

export default function OpenSourceSection() {
    return (
        <section className="mb-16 bg-linear-to-r from-blue-50 to-purple-50 p-8 rounded-lg border border-blue-200 animate-fade-in">
            <div className="flex items-start gap-4">
                <LightbulbIcon className="w-12 h-12 text-blue-500 shrink-0" />
                <div className="flex-1">
                    <h2 className="text-3xl font-bold mb-4 text-gray-900">Filosofía Open Source</h2>
                    <p className="text-gray-700 mb-4">
                        Creemos en el conocimiento libre y la colaboración comunitaria. Todo el
                        código de esta plataforma está disponible públicamente para que otros
                        estudiantes y desarrolladores puedan aprender, contribuir y adaptar el
                        sistema a sus propias necesidades.
                    </p>
                    <p className="text-gray-700 mb-6">
                        Este proyecto está licenciado bajo <strong>MIT License</strong>, permitiendo
                        el uso, modificación y distribución libre del código fuente. Valoramos las
                        contribuciones de la comunidad y fomentamos la transparencia en el
                        desarrollo de software educativo.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <a
                            href="https://github.com/dev-sandoval/faculties-web"
                            target="_blank"
                            className="inline-flex items-center gap-2 px-6 py-2 bg-gray-800 hover:bg-gray-900 transition-colors duration-300 rounded-md text-white hover-lift border border-gray-700"
                            rel="noopener noreferrer"
                        >
                            <Image
                                src="/images/social/github.svg"
                                width={20}
                                height={20}
                                alt="GitHub"
                            />
                            <span>Ver Código Fuente</span>
                        </a>
                        <a
                            href="https://github.com/dev-sandoval/faculties-web/blob/main/LICENSE"
                            target="_blank"
                            className="inline-flex items-center gap-2 px-6 py-2 bg-blue-600 hover:bg-blue-700 transition-colors duration-300 rounded-md text-white hover-lift"
                            rel="noopener noreferrer"
                        >
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                />
                            </svg>
                            <span>Licencia MIT</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
