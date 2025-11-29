import Link from 'next/link';
import Image from 'next/image';

export default function FeatureSpotlight() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    {/* Text Content */}
                    <div className="lg:w-1/2 space-y-6">
                        <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700 mb-2">
                            Tu diferencial
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                            Navegación del Campus
                        </h2>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            No te pierdas en tu primer día. Encuentra la ubicación exacta de tu
                            facultad, laboratorios y oficinas.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <svg
                                    className="w-6 h-6 text-green-500 shrink-0 mt-0.5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                                <span className="text-gray-700">
                                    Ubicaciones exactas de todas las facultades
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg
                                    className="w-6 h-6 text-green-500 shrink-0 mt-0.5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                                <span className="text-gray-700">
                                    Información de accesos y puntos de referencia
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg
                                    className="w-6 h-6 text-green-500 shrink-0 mt-0.5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                                <span className="text-gray-700">
                                    Mapa interactivo del campus universitario
                                </span>
                            </li>
                        </ul>
                        <div className="pt-4">
                            <Link
                                href="/faculties"
                                className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                            >
                                <span>Explorar Mapa Interactivo</span>
                                <svg
                                    className="w-5 h-5 ml-2"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                                    />
                                </svg>
                            </Link>
                        </div>
                    </div>

                    {/* Visual Content */}
                    <div className="lg:w-1/2">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
                            <div className="aspect-video bg-linear-to-br from-blue-100 to-blue-50 flex items-center justify-center">
                                {/* Placeholder for campus map - can be replaced with actual image */}
                                <div className="text-center p-8">
                                    <svg
                                        className="w-32 h-32 mx-auto text-blue-300 mb-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={1.5}
                                            d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                                        />
                                    </svg>
                                    <p className="text-blue-600 font-medium">
                                        Mapa Interactivo del Campus
                                    </p>
                                    <p className="text-sm text-blue-500 mt-2">
                                        Vista previa del sistema de navegación
                                    </p>
                                </div>
                            </div>
                            {/* Decorative elements */}
                            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500 rounded-full opacity-20 blur-2xl"></div>
                            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-400 rounded-full opacity-20 blur-2xl"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
