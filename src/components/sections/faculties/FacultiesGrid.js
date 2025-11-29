import Link from 'next/link';
import FacultyCard from '@/components/faculty/FacultyCard';

export default function FacultiesGrid({ faculties, searchQuery }) {
    if (faculties.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center py-20 animate-fade-in">
                <div className="bg-blue-50 rounded-full p-5 mb-6">
                    {searchQuery ? (
                        <svg
                            className="w-16 h-16 text-blue-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                    ) : (
                        <svg
                            className="w-16 h-16 text-blue-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                            />
                        </svg>
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
                        <svg
                            className="w-5 h-5 mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                            />
                        </svg>
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
