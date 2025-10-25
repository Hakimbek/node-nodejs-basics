import { writeFile } from 'fs';

const PATH = 'src/fs/files/fresh.txt';

const create = async () => {
  writeFile(PATH, 'I am fresh and young', { flag: 'wx' }, (err) => {
    if (err) throw new Error('FS operation failed');
  });
}

await create();
