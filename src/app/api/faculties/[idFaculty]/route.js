import { NextResponse } from 'next/server';
import cloudinary from '@/libs/cloudinary';
import { processImage } from '@/libs/processImage';
import { facultyService } from '@/services/facultyService';

export async function GET(request, { params }) {
    try {
        const { idFaculty } = await params;
        const result = await facultyService.getFacultyById(idFaculty);

        if (!result) {
            return NextResponse.json({ message: 'Faculty not found' }, { status: 404 });
        }
        return NextResponse.json(result);
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function DELETE(request, { params }) {
    try {
        const { idFaculty } = await params;
        const deleted = await facultyService.deleteFaculty(idFaculty);

        if (!deleted) {
            return NextResponse.json({ message: 'Faculty not found' }, { status: 404 });
        }
        return new Response(null, { status: 204 });
    } catch (e) {
        return NextResponse.json({ error: e.message }, { status: 500 });
    }
}

export async function PUT(request, { params }) {
    try {
        const { idFaculty } = await params;
        const data = await request.formData();

        const image = data.get('facultyImage');
        const updateData = {
            name: data.get('name'),
            slug: data.get('slug'),
            description: data.get('description'),
        };

        if (!updateData.name) {
            return NextResponse.json({ message: 'name is required' }, { status: 400 });
        }

        // Handle image upload
        if (image) {
            const buffer = await processImage(image);

            // Upload buffer directly to Cloudinary
            const result = await cloudinary.uploader.upload(
                `data:${image.type};base64,${buffer.toString('base64')}`
            );

            if (result && result.secure_url) {
                updateData.cover_image_url = result.secure_url;
            }
        }

        const updatedFaculty = await facultyService.updateFaculty(idFaculty, updateData);

        return NextResponse.json(
            {
                message: 'Faculty updated successfully',
                faculty: updatedFaculty,
            },
            { status: 200 }
        );
    } catch (e) {
        return NextResponse.json(
            {
                error: 'Error updating faculty: ' + e.message,
            },
            { status: 500 }
        );
    }
}
