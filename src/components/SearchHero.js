'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SearchHero({ faculties = [] }) {
    const [searchQuery, setSearchQuery] = useState('');
    const [showSuggestions, setShowSuggestions] = useState(false);
    const router = useRouter();

    // Quick access items - popular faculties
    const quickAccess = [
        { label: 'Minas', search: 'minas' },
        { label: 'Medicina', search: 'medicina' },
        { label: 'Ingeniería', search: 'ingeniería' },
        { label: 'Derecho', search: 'derecho' },
    ];

    // Filter faculties based on search query
    const filteredFaculties = faculties.filter(faculty =>
        faculty.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleSearch = query => {
        setSearchQuery(query);
        setShowSuggestions(query.length > 0);
    };

    const handleQuickAccess = search => {
        setSearchQuery(search);
        setShowSuggestions(true);
    };

    const handleSelectFaculty = facultyId => {
        router.push(`/faculties/${facultyId}`);
    };

    return (
        <section className="relative bg-linear-to-br from-blue-900 via-blue-800 to-blue-700 py-20 md:py-28 text-white overflow-hidden h-screen">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                        ¿Qué facultad o escuela buscas hoy?
                    </h1>
                    <p className="text-xl mb-10 text-white max-w-2xl mx-auto">
                        Encuentra rápidamente información sobre las facultades y escuelas de la
                        Universidad Nacional de Piura.
                    </p>

                    {/* Search Input */}
                    <div className="relative max-w-2xl mx-auto mb-8 border border-white rounded-full">
                        <div className="relative">
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={e => handleSearch(e.target.value)}
                                onFocus={() => searchQuery && setShowSuggestions(true)}
                                onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                                placeholder="Buscar facultad o escuela..."
                                className="w-full px-6 py-4 pl-14 text-lg rounded-full text-gray-50 placeholder-gray-300 shadow-2xl focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-opacity-75 focus-visible:outline-none transition-all duration-200"
                            />
                            <svg
                                className="absolute left-5 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-300"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                        </div>

                        {/* Autocomplete Suggestions */}
                        {showSuggestions && filteredFaculties.length > 0 && (
                            <div className="absolute w-full mt-2 bg-white rounded-lg shadow-2xl overflow-hidden z-20 max-h-64 overflow-y-auto">
                                {filteredFaculties.slice(0, 5).map(faculty => (
                                    <button
                                        key={faculty.id}
                                        onClick={() => handleSelectFaculty(faculty.id)}
                                        className="w-full px-6 py-3 text-left hover:bg-blue-50 transition-colors border-b border-gray-100 last:border-b-0"
                                    >
                                        <p className="font-medium text-gray-900">{faculty.name}</p>
                                        {faculty.description && (
                                            <p className="text-sm text-gray-600 truncate">
                                                {faculty.description}
                                            </p>
                                        )}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Quick Access Chips */}
                    <div className="flex flex-wrap justify-center align-center gap-3">
                        <div className="mr-2 flex items-center">
                            <span className="text-sm text-white font-medium">Accesos rápidos:</span>
                        </div>
                        {quickAccess.map(item => (
                            <button
                                key={item.label}
                                onClick={() => handleQuickAccess(item.search)}
                                className="px-5 py-2.5 bg-white hover:bg-blue-50 rounded-full text-sm font-semibold text-blue-900 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105"
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom wave decoration */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg
                    className="w-full h-24 md:h-36 text-gray-50"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <path
                        fill="currentColor"
                        d="M0,120V73.71c47.79-22.2,103.59-32.17,158-28,70.36,5.37,136.33,33.31,206.8,37.5,73.84,4.36,147.54-16.88,218.2-35.26,69.27-18,138.3-24.88,209.4-13.08,36.15,6,69.85,17.84,104.45,29.34,92.64,30.79,216.15,70.08,303,3.32V120Z"
                    ></path>
                </svg>
            </div>
        </section>
    );
}
