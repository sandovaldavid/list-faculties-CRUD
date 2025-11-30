import { generateBasicMetadata, generateViewport } from '@/libs/seoConfig';
import FacultiesHero from '@/components/sections/faculties/FacultiesHero';
import FacultiesToolbar from '@/components/sections/faculties/FacultiesToolbar';
import FacultiesGrid from '@/components/sections/faculties/FacultiesGrid';
import { facultyService } from '@/services/facultyService';

export const metadata = generateBasicMetadata('faculties');
export const viewport = generateViewport();

export const revalidate = 0;

import { cookies } from 'next/headers';

export default async function FacultiesPage({ searchParams }) {
    const { q: searchQuery = '' } = await searchParams;
    const faculties = await facultyService.getAllFaculties(searchQuery);

    const cookieStore = await cookies();
    const isAdmin = cookieStore.has('admin_access');

    return (
        <div className="min-h-screen bg-gray-50">
            <FacultiesHero />
            <FacultiesToolbar
                initialQuery={searchQuery}
                facultiesCount={faculties.length}
                isAdmin={isAdmin}
            />
            <div className="container mx-auto px-4 pb-16">
                <FacultiesGrid faculties={faculties} searchQuery={searchQuery} />
            </div>
        </div>
    );
}
