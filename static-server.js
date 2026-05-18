import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.static(__dirname, {
  redirect: false,
  extensions: false,
  index: false,
}));

app.listen(8080, () => {
  console.log('Static server running on port 8080');
});