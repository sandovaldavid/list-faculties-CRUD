import EditFacultyClientPage from './page-client';
import { generateBasicMetadata } from '@/libs/seoConfig';

export async function generateMetadata({ params }) {
    const { idFaculty } = await params;
    // Generamos los metadatos para la página de edición con el ID específico
    return generateBasicMetadata('editFaculty', { id: idFaculty });
}

export default async function EditFacultyPage({ params }) {
    const resolvedParams = await params;
    return <EditFacultyClientPage params={resolvedParams} />;
}
