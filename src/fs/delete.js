import { rm } from 'fs';

const PATH = 'src/fs/files/fileToRemove.txt';

const remove = async () => {
  rm(PATH, { force: false }, (err) => {
    if (err) throw new Error('FS operation failed');
  });
}

await remove();
