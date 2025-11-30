import { NextResponse } from 'next/server';

/**
 * Standardized success response
 * @param {any} data - The payload to return
 * @param {number} status - HTTP status code (default: 200)
 * @param {object} meta - Optional metadata (pagination, etc.)
 */
export function successResponse(data, status = 200, meta = null) {
    const response = {
        success: true,
        data,
    };

    if (meta) {
        response.meta = meta;
    }

    return NextResponse.json(response, { status });
}

/**
 * Standardized error response
 * @param {string} message - Error message
 * @param {number} status - HTTP status code (default: 500)
 * @param {object} details - Optional error details for debugging
 */
export function errorResponse(message, status = 500, details = null) {
    const response = {
        success: false,
        error: {
            message,
        },
    };

    if (details) {
        response.error.details = details;
    }

    return NextResponse.json(response, { status });
}
