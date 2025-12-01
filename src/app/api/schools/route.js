import { dbInstance as db } from '@/libs/db';
import { successResponse, errorResponse } from '@/libs/apiResponse';

export async function GET() {
    try {
        // Lightweight query for map markers
        // Only fetching essential geolocation data
        const results = await db('schools').select(
            'id',
            'faculty_id',
            'name',
            'latitude',
            'longitude',
            'pavilion'
        );

        return successResponse(results);
    } catch (e) {
        return errorResponse(e.message, 500);
    }
}
