import FacultyPageClient from './page-client';
import { generateBasicMetadata } from '@/libs/seoConfig';
import { facultyService } from '@/services/facultyService';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const faculty = await facultyService.getFacultyBySlug(slug);

    if (!faculty) {
        return {
            title: 'Facultad no encontrada',
        };
    }

    return generateBasicMetadata('facultyDetail', {
        title: faculty.name,
        description: faculty.description,
        image: faculty.cover_image_url || faculty.path_img,
    });
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
