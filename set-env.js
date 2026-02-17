const fs = require('fs');
const path = require('path');

const envDir = path.join(__dirname, 'src', 'environments');
const envFile = path.join(envDir, 'environment.ts');

const env = {
  supabaseUrl: process.env.SUPABASE_URL || '',
  supabaseKey: process.env.SUPABASE_KEY || '',
};

if (!fs.existsSync(envDir)) {
  fs.mkdirSync(envDir, { recursive: true });
}

fs.writeFileSync(envFile, `export const environment = ${JSON.stringify(env, null, 2)};\n`);
console.log('Wrote', envFile);