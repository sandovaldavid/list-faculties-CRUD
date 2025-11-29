import Link from 'next/link';
import SearchBar from '@/components/faculty/SearchBar';

export default function FacultiesToolbar({ initialQuery, facultiesCount }) {
    return (
        <div className="container mx-auto px-4 py-8 bg-white shadow-sm rounded-lg mt-2 mb-8 relative z-10 animate-fade-in">
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
                {/* Search Bar */}
                <SearchBar initialQuery={initialQuery} />

                {/* Stats and Actions */}
                <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
                    <div className="flex items-center">
                        <div className="p-2 bg-blue-100 text-blue-600 rounded-full mr-3">
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.5}
                                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                                />
                            </svg>
                        </div>
                        <span className="text-gray-700 font-medium">
                            {facultiesCount === 0
                                ? 'No hay facultades'
                                : `${facultiesCount} Facultade${facultiesCount !== 1 ? 's' : ''}`}
                        </span>
                    </div>

                    <Link
                        href="/new"
                        className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
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
                        <span className="hidden sm:inline">Nueva Facultad</span>
                        <span className="sm:hidden">Nueva</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}
