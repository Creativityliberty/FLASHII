const { db } = require('../lib/db');
const { sql } = require('drizzle-orm');

async function main() {
  try {
    const result = await db.execute(sql`SELECT NOW()`);
    console.log('Connexion à la base de données réussie');
    console.log('Heure actuelle de la base de données:', result[0].now);
  } catch (error) {
    console.error('Erreur de connexion à la base de données:', error);
  } finally {
    process.exit(0);
  }
}

main();