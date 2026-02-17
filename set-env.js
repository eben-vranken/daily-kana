const fs = require('fs');
const env = {
  supabaseUrl: process.env.SUPABASE_URL || '',
  supabaseKey: process.env.SUPABASE_KEY || '',
};
fs.writeFileSync('src/environments/environment.ts', `export const environment = ${JSON.stringify(env, null, 2)};\n`);