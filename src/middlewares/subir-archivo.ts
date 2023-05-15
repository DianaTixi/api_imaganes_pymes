import { diskStorage } from 'multer';
import path = require('path');

export const storageFile = {
  storage: diskStorage({
    destination: './uploads/files',
    filename: (req, file, cb) => {
      const filename: string = path
        .parse(file.originalname)
        .name.replace(/\s/g, '');
      const extension: string = path.parse(file.originalname).ext;

      cb(null, `${filename}${extension}`);
    },
  }),
};
