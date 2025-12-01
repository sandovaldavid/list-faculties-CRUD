import Link from 'next/link';
import { SchoolIcon, ExternalLinkIcon, LocationIcon } from '@/components/icons/ContactIcons';

export default function SchoolCard({ school }) {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all duration-300 group">
            <div className="flex items-start justify-between mb-4">
                <div className="bg-blue-50 p-3 rounded-lg group-hover:bg-blue-100 transition-colors duration-300">
                    <SchoolIcon className="w-6 h-6 text-blue-600" />
                </div>
                {school.official_website_url && (
                    <Link
                        href={school.official_website_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-blue-600 transition-colors"
                        title="Visitar sitio web"
                    >
                        <ExternalLinkIcon className="w-5 h-5" />
                    </Link>
                )}
            </div>

            <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-blue-700 transition-colors">
                {school.name}
            </h3>

            {school.pavilion && (
                <div className="flex items-center text-sm text-gray-500 mb-4">
                    <LocationIcon className="w-4 h-4 mr-1.5 text-gray-400" />
                    {school.pavilion}
                </div>
            )}

            <div className="pt-4 border-t border-gray-100 flex justify-between items-center">
                {school.latitude && school.longitude ? (
                    <a
                        href={`https://www.google.com/maps/search/?api=1&query=${school.latitude},${school.longitude}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-xs font-medium text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full hover:bg-blue-100 transition-colors"
                    >
                        <LocationIcon className="w-3.5 h-3.5 mr-1" />
                        Ver Ubicación
                    </a>
                ) : (
                    <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full">
                        Escuela Profesional
                    </span>
                )}
            </div>
        </div>
    );
}
