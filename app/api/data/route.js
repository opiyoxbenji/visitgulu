import { readFile } from 'fs/promises';
import path from 'path';

export async function getData() {
  const filePath = path.join(process.cwd(), '/lib/data.json');
  const jsonData = await readFile(filePath, 'utf8');
  return JSON.parse(jsonData);
}
