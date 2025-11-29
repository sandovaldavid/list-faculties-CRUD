import Image from 'next/image';
import Link from 'next/link';

function FacultyCard({ faculty }) {
    return (
        <div className="group flex flex-col bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 h-full">
            {/* ZONA A: Visual y Contexto (Header) */}
            <div className="relative h-48 w-full overflow-hidden">
                {faculty.path_img ? (
                    <Image
                        src={faculty.path_img}
                        alt={faculty.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority
                    />
                ) : (
                    <div className="w-full h-full bg-linear-to-br from-blue-100 to-blue-50 flex items-center justify-center text-blue-400">
                        <svg
                            className="w-20 h-20 opacity-40"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1"
                                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                            />
                        </svg>
                    </div>
                )}

                {/* Badge de Ubicación (Etiqueta Flotante) */}
                <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm text-white text-xs font-medium px-2.5 py-1 rounded-md shadow-sm">
                    Campus Universitario
                </div>
            </div>

            {/* ZONA B: Información Jerárquica (Body) */}
            <div className="p-5 flex flex-col grow">
                {/* Título de la Facultad */}
                <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-blue-700 transition-colors line-clamp-2 leading-tight">
                    {faculty.name}
                </h3>

                {/* Metadatos de Escuelas (El Dato Clave) */}
                <div className="flex items-center text-sm text-gray-600 mb-4">
                    <svg
                        className="w-4 h-4 mr-2 text-blue-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                        />
                    </svg>
                    <span className="font-medium">
                        {faculty.schools_count !== undefined ? faculty.schools_count : 'Varios'}{' '}
                        Escuelas Profesionales
                    </span>
                </div>

                {/* Separador flexible */}
                <div className="grow"></div>

                {/* ZONA C: La Barra de Acción (Footer) */}
                <div className="flex flex-col gap-3 pt-4 mt-2 border-t border-gray-100">
                    {/* Acción Primaria (Botón "Call to Action") */}
                    <Link
                        href={`/faculties/${faculty.id}`}
                        className="w-full flex items-center justify-center px-4 py-2.5 bg-blue-50 hover:bg-blue-100 text-blue-700 font-semibold rounded-lg transition-colors duration-200 group-hover:shadow-sm"
                    >
                        <svg
                            className="w-4 h-4 mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                        </svg>
                        Ubicar Pabellones
                    </Link>

                    {/* Acción Secundaria (Enlace de Salida) */}
                    <div className="flex justify-center">
                        <a
                            href={faculty.official_website_url || 'https://www.unp.edu.pe'}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-medium text-gray-500 hover:text-blue-600 flex items-center transition-colors px-2 py-1"
                        >
                            <svg
                                className="w-3 h-3 mr-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                                />
                            </svg>
                            Sitio Institucional
                            <svg
                                className="w-3 h-3 ml-1 opacity-70"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FacultyCard;
