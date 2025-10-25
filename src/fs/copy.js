import { cp } from 'fs';

const SOURCE = 'src/fs/files';
const DESTINATION = 'src/fs/files_copy';

const copy = async () => {
  cp(SOURCE, DESTINATION, { errorOnExist: true, force: false, recursive: true }, (err) => {
    if (err) throw new Error('FS operation failed');
  });
}

await copy();
