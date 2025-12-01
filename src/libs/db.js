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

/**
 * Single connection instance
 * @type {import('knex').Knex}
 * */
let instance;

if (!global.knexInstance) {
    global.knexInstance = knex(config);
}
instance = global.knexInstance;

export const dbInstance = instance;
export function getDb() {
    return instance;
}
