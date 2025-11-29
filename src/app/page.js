import { generateBasicMetadata } from '@/libs/seoConfig';
import { pool } from '@/libs/mysql';
import DisclaimerBanner from '@/components/DisclaimerBanner';
import SearchHero from '@/components/SearchHero';
import FeatureSpotlight from '@/components/FeatureSpotlight';
import FacultyDirectory from '@/components/FacultyDirectory';
import Footer from '@/components/Footer';

export const metadata = generateBasicMetadata('home');

// Load all faculties for search and directory
async function loadFaculties() {
    try {
        const result = await pool.query('SELECT * FROM faculties ORDER BY name ASC');
        return Array.isArray(result) ? result : [];
    } catch (error) {
        console.error('Error loading faculties:', error);
        return [];
    }
}

export default async function HomePage() {
    const faculties = await loadFaculties();

    return (
        <div className="min-h-screen">
            {/* Block A: Transparency Banner */}
            <DisclaimerBanner />

            {/* Block B: Search-First Hero */}
            <SearchHero faculties={faculties} />

            <div className="bg-linear-to-b from-gray-50 to-white">
                {/* Block C: Feature Spotlight - Campus Navigation */}
                <FeatureSpotlight />
                {/* Block D: Categorized Faculty Directory */}
                <FacultyDirectory faculties={faculties} />
            </div>

            {/* Block E: Personal Brand Footer */}
            <Footer />
        </div>
    );
}
