import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';
import { pipeline } from 'stream';

const SOURCE = 'src/zip/files/fileToCompress.txt';
const DESTINATION = 'src/zip/files/archive.gz';

const compress = async () => {
  const gzip = createGzip();
  pipeline(createReadStream(SOURCE), gzip, createWriteStream(DESTINATION), (err) => {
    if (err) throw err
  })
};

await compress();
