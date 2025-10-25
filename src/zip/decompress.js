import { createReadStream, createWriteStream } from 'fs';
import { createGunzip } from 'zlib';
import { pipeline } from 'stream'

const SOURCE = 'src/zip/files/archive.gz';
const DESTINATION = 'src/zip/files/fileToCompress.txt';

const decompress = async () => {
  pipeline(createReadStream(SOURCE), createGunzip(), createWriteStream(DESTINATION), (err) => {
    if (err) throw err
  });
};

await decompress();
