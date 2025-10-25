import { createReadStream } from 'fs'

const PATH = 'src/streams/files/fileToRead.txt'

const read = async () => {
  const stream = createReadStream(PATH);
  stream.on('data', chunk => process.stdout.write(chunk));
  stream.on('end', () => console.log('\nread stream finished'));
  stream.on('error', () => {
    throw new Error('Failed')
  });
};

await read();
