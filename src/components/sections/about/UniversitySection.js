import Link from 'next/link';
import Image from 'next/image';

export default function UniversitySection() {
    return (
        <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="animate-fade-in-up order-2 md:order-1">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                            Universidad Nacional de Piura
                        </h2>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            Fundada en marzo de 1955, la Universidad Nacional de Piura es una
                            institución pública de educación superior ubicada en el norte del Perú.
                        </p>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            Con más de 60 años de trayectoria, la UNP ha formado a generaciones de
                            profesionales comprometidos con el desarrollo de la región Piura y del
                            país.
                        </p>
                        <div className="flex space-x-4">
                            <Link
                                href="https://www.unp.edu.pe/web"
                                target="_blank"
                                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 transition-all duration-300 ease-in-out rounded-full text-white font-medium shadow-md hover:shadow-xl transform hover:-translate-y-1"
                            >
                                Visitar Sitio Oficial
                            </Link>
                        </div>
                    </div>
                    <div className="order-1 md:order-2">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl animate-scale-in">
                            <div className="aspect-video bg-blue-900 flex items-center justify-center relative">
                                <Image
                                    src="/images/unp.jpg"
                                    alt="Universidad Nacional de Piura"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="py-4 px-8">
                                <h3 className="text-xl font-bold text-black">
                                    Datos institucionales
                                </h3>
                                <ul className="mt-2 space-y-2 text-gray-500">
                                    <li className="flex items-center">
                                        <span className="w-28 font-medium">Fundación:</span>
                                        <span>Marzo de 1955</span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="w-28 font-medium">Ubicación:</span>
                                        <span>Piura, Perú</span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="w-28 font-medium">Facultades:</span>
                                        <span>14 facultades</span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="w-28 font-medium">Lema:</span>
                                        <span>&quot;Duc in altum&quot;</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
