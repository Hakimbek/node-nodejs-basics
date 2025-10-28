import { readdir } from 'node:fs';

const PATH = 'src/fs/files';

const list = async () => {
  readdir(PATH, (err, files) => {
    if (err) throw new Error('FS operation failed');

    files.forEach(file => console.log(file));
  });
};

await list();
