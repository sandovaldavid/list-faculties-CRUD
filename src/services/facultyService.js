import { dbInstance as db } from '@/libs/db';

/**
 * Service to handle faculty related database operations
 */
export const facultyService = {
    /**
     * Get all faculties with optimized query
     * @param {string} searchQuery - Optional search term
     * @returns {Promise<Array>} List of faculties
     */
    async getAllFaculties(searchQuery = '') {
        try {
            let query = db('faculties as f')
                .select('f.id', 'f.name', 'f.slug', 'f.cover_image_url', 'f.description')
                .count('s.id as schools_count')
                .leftJoin('schools as s', 'f.id', 's.faculty_id')
                .groupBy('f.id')
                .orderBy('f.name', 'asc');

            if (searchQuery) {
                query = query.where(builder => {
                    builder
                        .where('f.name', 'like', `%${searchQuery}%`)
                        .orWhere('f.description', 'like', `%${searchQuery}%`)
                        .orWhere('s.name', 'like', `%${searchQuery}%`);
                });
            }

            const result = await query;
            return result || [];
        } catch (error) {
            console.error('Error in facultyService.getAllFaculties:', error);
            throw error;
        }
    },

    /**
     * Get schools for a specific faculty
     * @param {number|string} facultyId
     * @returns {Promise<Array>} List of schools
     */
    async getFacultySchools(facultyId) {
        try {
            const results = await db('schools')
                .select('id', 'name', 'pavilion', 'official_website_url')
                .where('faculty_id', facultyId)
                .orderBy('name', 'asc');

            return results || [];
        } catch (error) {
            console.error('Error in facultyService.getFacultySchools:', error);
            throw error;
        }
    },

    /**
     * Get faculty by slug
     * @param {string} slug
     * @returns {Promise<Object>} Faculty data
     */
    async getFacultyBySlug(slug) {
        try {
            console.log('facultyService.getFacultyBySlug querying for:', slug);
            const result = await db('faculties').where('slug', slug).first();
            console.log('facultyService.getFacultyBySlug result:', result ? 'found' : 'not found');
            return result || null;
        } catch (error) {
            console.error('Error in facultyService.getFacultyBySlug:', error);
            throw error;
        }
    },

    /**
     * Create a new faculty
     * @param {Object} facultyData
     * @returns {Promise<Object>} Created faculty data
     */
    async createFaculty(facultyData) {
        try {
            const dbData = {
                name: facultyData.name,
                slug: facultyData.slug,
                description: facultyData.description,
                cover_image_url: facultyData.cover_image_url || facultyData.path_img,
            };

            // Remove undefined keys
            Object.keys(dbData).forEach(key => dbData[key] === undefined && delete dbData[key]);

            const [id] = await db('faculties').insert(dbData).returning('id');

            const insertedId = typeof id === 'object' ? id.id : id;

            return {
                id: insertedId,
                ...dbData,
            };
        } catch (error) {
            console.error('Error in facultyService.createFaculty:', error);
            throw error;
        }
    },

    /**
     * Update a faculty
     * @param {number|string} id
     * @param {Object} facultyData
     * @returns {Promise<Object>} Updated faculty data
     */
    async updateFaculty(id, facultyData) {
        try {
            const dbData = {
                name: facultyData.name,
                slug: facultyData.slug,
                description: facultyData.description,
                cover_image_url: facultyData.cover_image_url || facultyData.path_img,
            };

            // Remove undefined keys
            Object.keys(dbData).forEach(key => dbData[key] === undefined && delete dbData[key]);

            await db('faculties').where('id', id).update(dbData);
            return { id, ...dbData };
        } catch (error) {
            console.error('Error in facultyService.updateFaculty:', error);
            throw error;
        }
    },

    /**
     * Get faculty by ID
     * @param {number|string} id
     * @returns {Promise<Object>} Faculty data
     */
    async getFacultyById(id) {
        try {
            const result = await db('faculties').where('id', id).first();
            return result || null;
        } catch (error) {
            console.error('Error in facultyService.getFacultyById:', error);
            throw error;
        }
    },

    /**
     * Delete a faculty
     * @param {number|string} id
     * @returns {Promise<boolean>} True if deleted, false if not found
     */
    async deleteFaculty(id) {
        try {
            const rowsAffected = await db('faculties').where('id', id).del();
            return rowsAffected > 0;
        } catch (error) {
            console.error('Error in facultyService.deleteFaculty:', error);
            throw error;
        }
    },
};
