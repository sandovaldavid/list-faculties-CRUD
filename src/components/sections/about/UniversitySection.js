import Link from 'next/link';

export default function UniversitySection() {
    return (
        <section className="mb-16 grid md:grid-cols-2 gap-8 items-center">
            <div className="animate-fade-in-up">
                <h2 className="text-3xl font-bold mb-4 text-gray-900">
                    Universidad Nacional de Piura
                </h2>
                <p className="text-gray-600 mb-4">
                    Fundada el marzo de 1955, la Universidad Nacional de Piura es una institución
                    pública de educación superior ubicada en el norte del Perú.
                </p>
                <p className="text-gray-600 mb-4">
                    Con más de 60 años de trayectoria, la UNP ha formado a generaciones de
                    profesionales comprometidos con el desarrollo de la región Piura y del país.
                </p>
                <div className="flex space-x-4 mt-6">
                    <Link
                        href="https://www.unp.edu.pe/web"
                        target="_blank"
                        className="px-6 py-2 bg-blue-600 hover:bg-blue-700 transition-colors duration-300 rounded-md text-white hover-lift"
                    >
                        Sitio Oficial
                    </Link>
                </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-xl animate-scale-in border border-gray-100">
                <div className="aspect-video relative rounded-md overflow-hidden bg-blue-900 flex items-center justify-center">
                    <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern.png')]"></div>
                    <div className="text-center p-6">
                        <div className="w-24 h-24 mx-auto mb-4 text-white"></div>
                        <span className="text-lg font-semibold text-white tracking-wide">
                            Universidad Nacional de Piura
                        </span>
                    </div>
                </div>
                <div className="mt-4">
                    <h3 className="text-xl font-bold text-black">Datos institucionales</h3>
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
        </section>
    );
}
