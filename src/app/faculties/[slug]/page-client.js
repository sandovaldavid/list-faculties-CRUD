'use client';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import BackButton from '@/components/ui/BackButton';
import { DEFAULT_OG_IMAGE, getCanonicalUrl } from '@/libs/seoConfig';
import FacultyHero from '@/components/sections/faculty-detail/FacultyHero';
import FacultyInfo from '@/components/sections/faculty-detail/FacultyInfo';
import SchoolsList from '@/components/sections/faculty-detail/SchoolsList';

function FacultyPageClient({ faculty, schools }) {
    const contentRef = useRef(null);

    // Construir URL canónica dinámica usando la función centralizada
    const canonicalUrl = getCanonicalUrl(`/faculties/${faculty.slug}`);

    // Efecto de scroll a la vista una vez cargado
    useEffect(() => {
        if (faculty && contentRef.current) {
            setTimeout(() => {
                contentRef.current.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
            }, 300);
        }
    }, [faculty]);

    return (
        <>
            <Head>
                <title>{faculty.name} | Facultades UNP</title>
                <meta
                    name="description"
                    content={
                        faculty.description ||
                        `Información detallada de la facultad ${faculty.name}`
                    }
                />
                <link rel="canonical" href={canonicalUrl} />

                {/* Open Graph */}
                <meta property="og:title" content={`${faculty.name} | Facultades UNP`} />
                <meta
                    property="og:description"
                    content={
                        faculty.description ||
                        `Información detallada de la facultad ${faculty.name}`
                    }
                />
                <meta property="og:url" content={canonicalUrl} />
                <meta property="og:type" content="website" />
                <meta property="og:image" content={DEFAULT_OG_IMAGE} />
                <meta property="og:image:alt" content={`Imagen de la facultad ${faculty.name}`} />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={`${faculty.name} | Facultades UNP`} />
                <meta
                    name="twitter:description"
                    content={
                        faculty.description ||
                        `Información detallada de la facultad ${faculty.name}`
                    }
                />
                <meta name="twitter:image" content={DEFAULT_OG_IMAGE} />
                <meta name="twitter:image:alt" content={`Imagen de la facultad ${faculty.name}`} />
            </Head>

            <div ref={contentRef} className="bg-white min-h-screen">
                {/* Hero Section */}
                <FacultyHero faculty={faculty} />

                {/* Info Section */}
                <FacultyInfo faculty={faculty} />

                {/* Schools List Section */}
                <SchoolsList schools={schools} />

                {/* Navigation Section */}
                <section className="py-6 border-t border-gray-200">
                    <div className="flex justify-center">
                        <BackButton />
                    </div>
                </section>
            </div>
        </>
    );
}
export default FacultyPageClient;
