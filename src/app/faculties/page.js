import { pool } from '@/libs/mysql';
import { generateBasicMetadata, generateViewport } from '@/libs/seoConfig';
import FacultiesHero from '@/components/sections/faculties/FacultiesHero';
import FacultiesToolbar from '@/components/sections/faculties/FacultiesToolbar';
import FacultiesGrid from '@/components/sections/faculties/FacultiesGrid';

export const metadata = generateBasicMetadata('faculties');
export const viewport = generateViewport();

export const revalidate = 0;

async function loadFaculties(searchQuery = '') {
    try {
        let query = `
            SELECT 
                f.*,
                COUNT(s.id) as schools_count
            FROM faculties f
            LEFT JOIN schools s ON f.id = s.faculty_id
        `;

        const params = [];

        if (searchQuery) {
            query += ` WHERE f.name LIKE ? OR f.description LIKE ? OR s.name LIKE ?`;
            const searchPattern = `%${searchQuery}%`;
            params.push(searchPattern, searchPattern, searchPattern);
        }

        query += ` GROUP BY f.id ORDER BY f.name ASC`;

        const result =
            params.length > 0 ? await pool.query(query, params) : await pool.query(query);

        return Array.isArray(result) ? result : [];
    } catch (error) {
        console.error('Error loading faculties:', error);
        return [];
    }
}

export default async function FacultiesPage({ searchParams }) {
    const searchQuery = searchParams?.q || '';
    const faculties = await loadFaculties(searchQuery);

    return (
        <div className="min-h-screen bg-gray-50">
            <FacultiesHero />
            <FacultiesToolbar initialQuery={searchQuery} facultiesCount={faculties.length} />
            <div className="container mx-auto px-4 pb-16">
                <FacultiesGrid faculties={faculties} searchQuery={searchQuery} />
            </div>
        </div>
    );
}
