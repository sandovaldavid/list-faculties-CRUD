import { pool } from '@/libs/mysql';

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
            let query = `
                SELECT 
                    f.id,
                    f.name,
                    f.slug,
                    f.cover_image_url,
                    f.description,
                    COUNT(s.id) as schools_count
                FROM faculties f
                LEFT JOIN schools s ON f.id = s.faculty_id
            `;

            const params = [];

            if (searchQuery) {
                query += ` WHERE f.name LIKE ? OR f.description LIKE ? OR s.name LIKE ?`;
                const searchPattern = `%${searchQuery}%`;
                params.push(searchPattern, searchPattern, searchPattern);
            }

            query += ` GROUP BY f.id ORDER BY f.name ASC`;

            const result =
                params.length > 0 ? await pool.query(query, params) : await pool.query(query);

            return Array.isArray(result) ? result : [];
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
            const results = await pool.query(
                `
                SELECT 
                    id,
                    name,
                    pavilion,
                    official_website_url
                FROM schools
                WHERE faculty_id = ?
                ORDER BY name ASC
                `,
                [facultyId]
            );
            return Array.isArray(results) ? results : [];
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
            const results = await pool.query('SELECT * FROM faculties WHERE slug = ?', [slug]);
            console.log(
                'facultyService.getFacultyBySlug result count:',
                Array.isArray(results) ? results.length : 'not array'
            );
            return Array.isArray(results) ? results[0] : null;
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
            // Ensure we use the correct column name for the database
            const dbData = {
                name: facultyData.name,
                slug: facultyData.slug,
                description: facultyData.description,
                cover_image_url: facultyData.cover_image_url || facultyData.path_img, // Handle both for compatibility
            };

            // Remove undefined keys
            Object.keys(dbData).forEach(key => dbData[key] === undefined && delete dbData[key]);

            const result = await pool.query('INSERT INTO faculties SET ?', dbData);
            return {
                id: result.insertId,
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

            await pool.query('UPDATE faculties SET ? WHERE id = ?', [dbData, id]);
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
            const results = await pool.query('SELECT * FROM faculties WHERE id = ?', [id]);
            return Array.isArray(results) ? results[0] : null;
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
            const result = await pool.query('DELETE FROM faculties WHERE id = ?', [id]);
            return result.affectedRows > 0;
        } catch (error) {
            console.error('Error in facultyService.deleteFaculty:', error);
            throw error;
        }
    },
};
