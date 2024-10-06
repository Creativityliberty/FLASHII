const Database = require('better-sqlite3');

const db = new Database('flash-africa.db', { verbose: console.log });

module.exports = db;