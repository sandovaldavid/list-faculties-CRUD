import FacultyPageClient from './page-client';
import { SITE_NAME, DEFAULT_OG_IMAGE, getCanonicalUrl } from '@/libs/seoConfig';
import { facultyService } from '@/services/facultyService';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }) {
    const { slug } = await params;

    try {
        const faculty = await facultyService.getFacultyBySlug(slug);

        if (!faculty) {
            return {
                title: 'Facultad no encontrada | UNP Campus Map',
                description: 'La facultad solicitada no está disponible en el directorio.',
            };
        }

        const title = `${faculty.slug.toUpperCase()} | UNP Campus Map`;
        const description = faculty.description
            ? faculty.description.substring(0, 160)
            : `Encuentra la ubicación, pabellones y escuelas de la ${faculty.name} en la Universidad Nacional de Piura.`;

        const image = faculty.cover_image_url || faculty.path_img || DEFAULT_OG_IMAGE;
        const url = getCanonicalUrl(`/faculties/${slug}`);

        return {
            title: title,
            description: description,
            alternates: {
                canonical: url,
            },
            openGraph: {
                title: title,
                description: description,
                url: url,
                siteName: SITE_NAME,
                images: [
                    {
                        url: image,
                        width: 1200,
                        height: 630,
                        alt: `Foto de ${faculty.name}`,
                    },
                ],
                locale: 'es_PE',
                type: 'website',
            },
            twitter: {
                card: 'summary_large_image',
                title: title,
                description: description,
                images: [image],
            },
        };
    } catch (error) {
        console.error('Error generando metadatos:', error);
        return {
            title: 'Detalle de Facultad | UNP Campus Map',
            description: 'Explora el directorio de facultades de la UNP.',
        };
    }
}

export default async function FacultyPage({ params }) {
    const { slug } = await params;
    const faculty = await facultyService.getFacultyBySlug(slug);

    if (!faculty) {
        notFound();
    }

    const schools = await facultyService.getFacultySchools(faculty.id);

    // Serializar fechas para pasar al cliente
    const serializedFaculty = {
        ...faculty,
        created_at: faculty.created_at?.toString(),
        updated_at: faculty.updated_at?.toString(),
    };

    return <FacultyPageClient faculty={serializedFaculty} schools={schools} />;
}
