import { readFileSync } from 'node:fs';

console.log(readFileSync(new URL('../db/schema.sql', import.meta.url), 'utf8'));
