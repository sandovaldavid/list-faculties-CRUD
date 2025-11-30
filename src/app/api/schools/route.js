import { pool } from '@/libs/mysql';
import { successResponse, errorResponse } from '@/libs/apiResponse';

export async function GET() {
    try {
        // Lightweight query for map markers
        // Only fetching essential geolocation data
        const results = await pool.query(`
            SELECT 
                id,
                faculty_id,
                name,
                latitude,
                longitude,
                pavilion
            FROM schools
        `);

        return successResponse(results);
    } catch (e) {
        return errorResponse(e.message, 500);
    }
}
