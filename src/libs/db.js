import knex from 'knex';
import { db } from './config.js';

const config = {
    client: db.client,
    connection: {
        host: db.host,
        port: db.port,
        user: db.user,
        password: db.password,
        database: db.database,
        ssl: db.client === 'pg' ? { rejectUnauthorized: false } : false,
    },
    pool: {
        min: 2,
        max: 10,
    },
};

// Singleton instance
let instance = null;

export function getDb() {
    if (!instance) {
        instance = knex(config);
    }
    return instance;
}

export const dbInstance = getDb();
