import { successResponse, errorResponse } from '@/libs/apiResponse';
import { facultyService } from '@/services/facultyService';

export async function GET(request, { params }) {
    try {
        const { idFaculty } = params;
        const results = await facultyService.getFacultySchools(idFaculty);
        return successResponse(results);
    } catch (e) {
        return errorResponse(e.message, 500);
    }
}
