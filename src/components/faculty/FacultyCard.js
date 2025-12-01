import Image from 'next/image';
import Link from 'next/link';
import { Building2, GraduationCap, MapPin, Globe, ExternalLink } from 'lucide-react';

function FacultyCard({ faculty }) {
    return (
        <div className="group flex flex-col bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 h-full">
            {/* ZONA A: Visual y Contexto (Header) */}
            <Link
                href={`/faculties/${faculty.slug}`}
                className="relative h-48 w-full overflow-hidden"
            >
                {faculty.cover_image_url ? (
                    <Image
                        src={faculty.cover_image_url}
                        alt={faculty.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority
                    />
                ) : (
                    <div className="w-full h-full bg-linear-to-br from-blue-100 to-blue-50 flex items-center justify-center text-blue-400">
                        <Building2 className="w-20 h-20 opacity-40" />
                    </div>
                )}

                {/* Badge de Ubicación (Etiqueta Flotante) */}
                <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm text-white text-xs font-medium px-2.5 py-1 rounded-md shadow-sm">
                    Campus Universitario
                </div>
            </Link>

            {/* ZONA B: Información Jerárquica (Body) */}
            <div className="p-5 flex flex-col grow">
                {/* Título de la Facultad */}
                <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-blue-700 transition-colors line-clamp-2 leading-tight">
                    {faculty.name}
                </h3>

                {/* Metadatos de Escuelas (El Dato Clave) */}
                <div className="flex items-center text-sm text-gray-600 mb-4">
                    <GraduationCap className="w-4 h-4 mr-2 text-blue-600" />
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
                        href={`/faculties/${faculty.slug}`}
                        className="w-full flex items-center justify-center px-4 py-2.5 bg-blue-50 hover:bg-blue-100 text-blue-700 font-semibold rounded-lg transition-colors duration-200 group-hover:shadow-sm"
                    >
                        <MapPin className="w-4 h-4 mr-2" />
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
                            <Globe className="w-3 h-3 mr-1" />
                            Sitio Institucional
                            <ExternalLink className="w-3 h-3 ml-1 opacity-70" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FacultyCard;
