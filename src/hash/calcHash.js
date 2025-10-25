import { createHash } from 'crypto';
import { createReadStream } from 'fs';

const PATH = 'src/hash/files/fileToCalculateHashFor.txt';

const calculateHash = async () => {
  const stream = createReadStream(PATH);
  const hash = createHash('sha256');
  stream.on('data', (chunk) => {
    hash.update(chunk);
  })
  stream.on('end', () => console.log(hash.digest('hex')))
  stream.on('error', () => new Error('Failed'));
};

await calculateHash();
