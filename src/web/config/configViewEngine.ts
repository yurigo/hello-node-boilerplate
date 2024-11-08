import { type Express } from 'express';
import { fileURLToPath } from 'url';
import path from 'path';
// import { dirname } from 'path';

// Obtener la ruta del archivo actual (__filename)
const __filename = fileURLToPath(import.meta.url);
console.log('🚀 ~ file: configViewEngine.js ~ line 5 ~ __filename', __filename);
// Obtener el directorio del archivo actual (__dirname)

const __dirname = path.dirname(__filename);
console.log('🚀 ~ file: configViewEngine.js ~ line 5 ~ __filename', __dirname);

export default function configViewEngine(app: Express) {
  app.set('view engine', 'ejs');
  app.set('views', path.join(__dirname, '../../../views'));
}
