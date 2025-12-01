import Link from 'next/link';
import FacultyCard from '@/components/faculty/FacultyCard';
import SearchIcon from '@/components/icons/SearchIcon';
import { EmptyStateIcon } from '@/components/icons/StatusIcons';
import { PlusIcon } from '@/components/icons/NavigationIcons';

export default function FacultiesGrid({ faculties, searchQuery }) {
    if (faculties.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center py-20 animate-fade-in">
                <div className="bg-blue-50 rounded-full p-5 mb-6">
                    {searchQuery ? (
                        <SearchIcon className="w-16 h-16 text-blue-400" />
                    ) : (
                        <EmptyStateIcon className="w-16 h-16 text-blue-400" />
                    )}
                </div>
                <h3 className="text-xl md:text-2xl font-medium text-gray-800 mb-2">
                    {searchQuery
                        ? `No se encontraron resultados para "${searchQuery}"`
                        : 'No hay facultades registradas'}
                </h3>
                <p className="text-gray-500 mb-6 text-center max-w-lg">
                    {searchQuery
                        ? 'Intenta con otros términos de búsqueda o limpia el filtro para ver todas las facultades.'
                        : '¡Comienza agregando la primera facultad para construir el directorio académico de la universidad!'}
                </p>
                {!searchQuery && (
                    <Link
                        href="/new"
                        className="flex items-center px-5 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-md"
                    >
                        <PlusIcon className="w-5 h-5 mr-2" />
                        <span>Crear Primera Facultad</span>
                    </Link>
                )}
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {faculties.map((faculty, index) => (
                <div
                    key={faculty.id}
                    className="animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                >
                    <FacultyCard faculty={faculty} />
                </div>
            ))}
        </div>
    );
}
