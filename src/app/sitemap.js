import { dbInstance as db } from '@/libs/db';
import { SITE_URL } from '@/libs/seoConfig';

export default async function sitemap() {
    const currentDate = new Date().toISOString().split('T')[0];

    // Static pages
    const routes = [
        {
            url: `${SITE_URL}/`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 1.0,
        },
        {
            url: `${SITE_URL}/faculties`,
            lastModified: currentDate,
            changeFrequency: 'daily',
            priority: 1.0,
        },
        {
            url: `${SITE_URL}/new`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${SITE_URL}/about`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.6,
        },
    ];

    try {
        // Fetch faculties
        const faculties = await db('faculties').select('id');

        const facultyRoutes = faculties.flatMap(faculty => [
            {
                url: `${SITE_URL}/faculties/${faculty.id}`,
                lastModified: currentDate,
                changeFrequency: 'weekly',
                priority: 0.8,
            },
            {
                url: `${SITE_URL}/faculties/edit/${faculty.id}`,
                lastModified: currentDate,
                changeFrequency: 'monthly',
                priority: 0.6,
            },
        ]);

        return [...routes, ...facultyRoutes];
    } catch (error) {
        console.error('Error generating sitemap:', error);
        return routes;
    }
}
