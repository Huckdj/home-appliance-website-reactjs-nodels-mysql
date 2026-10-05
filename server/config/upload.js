import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';

const serverDirectory = path.dirname(fileURLToPath(import.meta.url));
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, path.join(serverDirectory, '../../src/assets/publicimg/imgproduct'));
  },
  filename(req, file, cb) {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});

const upload = multer({ storage });
export default upload;
