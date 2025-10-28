import { rename as rm, access, constants } from 'node:fs';

const OLD = 'src/fs/files/wrongFilename.txt';
const NEW = 'src/fs/files/properFilename.md';

const rename = async () => {
  access(NEW, constants.F_OK, (err) => {
    if (!err) throw new Error('FS operation failed');

    rm(OLD, NEW, (err) => {
      if (err) throw new Error('FS operation failed');
    });
  });
};

await rename();
