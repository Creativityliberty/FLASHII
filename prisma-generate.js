const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

function runPrismaGenerate() {
  try {
    console.log('Running prisma generate...');
    execSync('npx prisma generate', { stdio: 'inherit' });
    console.log('prisma generate completed successfully.');
  } catch (error) {
    console.error('Error running prisma generate:', error.message);
    process.exit(1);
  }
}

function checkPrismaClientExists() {
  const clientPath = path.join(__dirname, 'node_modules', '.prisma', 'client');
  return fs.existsSync(clientPath);
}

if (checkPrismaClientExists()) {
  console.log('Prisma Client already exists. Skipping prisma generate.');
} else {
  runPrismaGenerate();
}