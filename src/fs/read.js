import { readFile } from 'fs';

const PATH = 'src/fs/files/fileToRead.txt';

const read = async () => {
  readFile(PATH, { encoding: 'utf-8', flag: 'r' }, (err, data) => {
    if (err) throw new Error('FS operation failed');

    console.log(data);
  });
};

await read();
