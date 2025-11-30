import Link from 'next/link';
import Image from 'next/image';
import { CheckIcon } from '@/components/icons/StatusIcons';
import { ArrowRightIcon } from '@/components/icons/NavigationIcons';
import { MapIcon } from '@/components/icons/ContactIcons';

export default function FeatureSpotlight() {
    return (
        <section className="py-8">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    {/* Text Content */}
                    <div className="lg:w-1/2 space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                            Navegación del Campus
                        </h2>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            No te pierdas en tu primer día. Encuentra la ubicación exacta de tu
                            facultad, laboratorios y oficinas.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <CheckIcon className="w-6 h-6 text-green-500 shrink-0 mt-0.5" />
                                <span className="text-gray-700">
                                    Ubicaciones exactas de todas las facultades
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckIcon className="w-6 h-6 text-green-500 shrink-0 mt-0.5" />
                                <span className="text-gray-700">
                                    Información de accesos y puntos de referencia
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckIcon className="w-6 h-6 text-green-500 shrink-0 mt-0.5" />
                                <span className="text-gray-700">
                                    Mapa interactivo del campus universitario
                                </span>
                            </li>
                        </ul>
                        <div className="pt-4">
                            <Link
                                href="/faculties"
                                className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform"
                            >
                                <span>Explorar Mapa Interactivo</span>
                                <ArrowRightIcon className="w-5 h-5 ml-2" />
                            </Link>
                        </div>
                    </div>

                    {/* Visual Content */}
                    <div className="lg:w-1/2">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
                            <div className="aspect-video bg-linear-to-br from-blue-100 to-blue-50 flex items-center justify-center">
                                {/* Placeholder for campus map - can be replaced with actual image */}
                                <div className="text-center p-8">
                                    <MapIcon className="w-32 h-32 mx-auto text-blue-300 mb-4" />
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
