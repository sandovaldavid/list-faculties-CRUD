'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import SearchIcon from '@/components/icons/SearchIcon';
import WaveDecoration from '@/components/icons/WaveDecoration';

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
                    <div className="relative z-10 text-center mb-12">
                        <div className="inline-flex items-center justify-center p-3 bg-blue-800/50 rounded-full mb-6 backdrop-blur-sm border border-blue-400/30 animate-fade-in-up">
                            <span className="text-blue-200 text-sm font-semibold tracking-wide uppercase">
                                Directorio Universitario
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight animate-fade-in-up animation-delay-100">
                            Encuentra tu <span className="text-blue-300">Escuela y Pabellón</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-10 leading-relaxed font-light animate-fade-in-up animation-delay-200">
                            Ubica rápidamente tu facultad, conoce los pabellones y accede a la
                            información oficial de la Universidad Nacional de Piura.
                        </p>
                        <div className="w-24 h-1 bg-blue-400 mx-auto rounded-full animate-scale-x animation-delay-300"></div>
                    </div>
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
                            <SearchIcon className="absolute left-5 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-300" />
                        </div>

                        {/* Autocomplete Suggestions */}
                        {showSuggestions && filteredFaculties.length > 0 && (
                            <div className="absolute w-full mt-2 bg-white rounded-lg shadow-2xl overflow-hidden z-20 max-h-64 overflow-y-auto">
                                {filteredFaculties.slice(0, 5).map(faculty => (
                                    <button
                                        key={faculty.id}
                                        onClick={() => handleSelectFaculty(faculty.slug)}
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
                <WaveDecoration className="w-full h-24 md:h-36 text-gray-50" />
            </div>
        </section>
    );
}
