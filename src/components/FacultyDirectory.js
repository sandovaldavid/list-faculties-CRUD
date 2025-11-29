'use client';
import { useState } from 'react';
import FacultyCard from './facultyCard';

export default function FacultyDirectory({ faculties = [] }) {
    const [activeCategory, setActiveCategory] = useState('all');

    // Categories for filtering
    const categories = [
        { id: 'all', label: 'Todas' },
        { id: 'ciencias', label: 'Ciencias' },
        { id: 'ingenierias', label: 'Ingenierías' },
        { id: 'salud', label: 'Salud' },
        { id: 'letras', label: 'Letras' },
    ];

    // Filter faculties by category
    const filteredFaculties =
        activeCategory === 'all'
            ? faculties
            : faculties.filter(faculty => {
                  const name = faculty.name.toLowerCase();
                  switch (activeCategory) {
                      case 'ciencias':
                          return name.includes('ciencia');
                      case 'ingenierias':
                          return name.includes('ingenier');
                      case 'salud':
                          return name.includes('medicina') || name.includes('salud');
                      case 'letras':
                          return (
                              name.includes('human') ||
                              name.includes('social') ||
                              name.includes('derecho') ||
                              name.includes('educación')
                          );
                      default:
                          return true;
                  }
              });

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Directorio de Facultades
                    </h2>
                    <div className="w-24 h-1 bg-blue-600 mx-auto mb-6 rounded-full"></div>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Explora nuestras facultades organizadas por área de conocimiento
                    </p>
                </div>

                {/* Category Filters */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {categories.map(category => (
                        <button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className={`px-6 py-2.5 rounded-lg font-medium transition-all duration-300 ${
                                activeCategory === category.id
                                    ? 'bg-blue-600 text-white shadow-lg scale-105'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                        >
                            {category.label}
                        </button>
                    ))}
                </div>

                {/* Faculty Grid */}
                {filteredFaculties.length > 0 ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {filteredFaculties.map(faculty => (
                            <FacultyCard key={faculty.id} faculty={faculty} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12">
                        <svg
                            className="w-16 h-16 mx-auto text-gray-300 mb-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        <p className="text-gray-500 text-lg">
                            No se encontraron facultades en esta categoría
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
}
