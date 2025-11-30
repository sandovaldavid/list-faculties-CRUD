import { generateBasicMetadata } from '@/libs/seoConfig';
import AboutHero from '@/components/sections/about/AboutHero';
import MissionSection from '@/components/sections/about/MissionSection';
import UniversitySection from '@/components/sections/about/UniversitySection';
import ProjectInfoSection from '@/components/sections/about/ProjectInfoSection';
import OpenSourceSection from '@/components/sections/about/OpenSourceSection';
import TeamSection from '@/components/sections/about/TeamSection';
import ContactSection from '@/components/sections/about/ContactSection';

export const metadata = generateBasicMetadata('about');

function AboutPage() {
    return (
        <div className="min-h-screen">
            <AboutHero />
            <MissionSection />
            <UniversitySection />
            <ProjectInfoSection />
            <OpenSourceSection />
            <TeamSection />
            <ContactSection />
        </div>
    );
}

export default AboutPage;
