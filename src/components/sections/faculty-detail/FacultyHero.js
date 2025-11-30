import Image from 'next/image';
import { useState } from 'react';

export default function FacultyHero({ faculty }) {
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <section className="relative min-h-[50vh] flex items-center bg-linear-to-r from-blue-900 to-blue-900/60 overflow-hidden pt-16">
            {/* Imagen de fondo con superposición */}
            {faculty?.cover_image_url && (
                <div className="absolute inset-0 opacity-40 mix-blend-overlay">
                    <Image
                        src={faculty.cover_image_url}
                        alt={faculty.name}
                        fill
                        className={`object-cover transition-opacity duration-700 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                        onLoadingComplete={() => setImageLoaded(true)}
                        priority
                    />
                </div>
            )}

            {/* Contenido del Hero */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
                <div className="max-w-4xl animate-fade-in-up">
                    <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-1.5 rounded-full text-sm text-white mb-6">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></span>
                        Universidad Nacional de Piura
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
                        {faculty.name}
                    </h1>

                    <div className="w-24 h-1.5 bg-blue-400 rounded-full mb-8"></div>
                </div>
            </div>
        </section>
    );
}
