import { generateBasicMetadata } from '@/libs/seoConfig';
import DisclaimerBanner from '@/components/layout/DisclaimerBanner';
import SearchHero from '@/components/sections/SearchHero';
import FeatureSpotlight from '@/components/sections/FeatureSpotlight';
import FacultyDirectory from '@/components/sections/FacultyDirectory';
import { facultyService } from '@/services/facultyService';

export const metadata = generateBasicMetadata('home');

export default async function HomePage() {
    const faculties = await facultyService.getAllFaculties();

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
        </div>
    );
}
