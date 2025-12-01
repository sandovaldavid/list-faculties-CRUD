import cloudinary from '@/libs/cloudinary';
import { processImage } from '@/libs/processImage';
import { successResponse, errorResponse } from '@/libs/apiResponse';
import { facultyService } from '@/services/facultyService';

export async function GET() {
    try {
        const results = await facultyService.getAllFaculties();

        if (results.length === 0) {
            return errorResponse('No faculties found', 404);
        }

        return successResponse(results);
    } catch (e) {
        return errorResponse(e.message, 500);
    }
}

export async function POST(request) {
    try {
        const data = await request.formData();
        const image = data.get('facultyImage');

        if (!data.get('name')) {
            return errorResponse('Name is required', 400);
        }

        let path_img = '';
        if (image) {
            const buffer = await processImage(image);

            const resImg = await cloudinary.uploader.upload(
                `data:${image.type};base64,${buffer.toString('base64')}`
            );

            if (resImg) {
                path_img = resImg.secure_url;
            }
        }

        const newFaculty = await facultyService.createFaculty({
            name: data.get('name'),
            slug: data.get('slug'),
            description: data.get('description') || '',
            cover_image_url: path_img,
        });

        return successResponse(newFaculty, 201);
    } catch (error) {
        return errorResponse('Error creating faculty: ' + error.message, 500);
    }
}
