import FacultyForm from '@/components/faculty/FacultyForm';
import PageHeader from '@/components/ui/PageHeader';
import { generateBasicMetadata } from '@/libs/seoConfig';

export const metadata = generateBasicMetadata('newFaculty');

export default function NewPage() {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="container mx-auto px-4 max-w-7xl">
                <PageHeader
                    title="Crear Nueva Facultad"
                    description="Completa el formulario para añadir una nueva facultad a la Universidad"
                    backUrl="/faculties"
                />
                <FacultyForm />
            </div>
        </div>
    );
}
