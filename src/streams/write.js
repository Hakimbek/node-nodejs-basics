import { createWriteStream } from 'fs'

const PATH = 'src/streams/files/fileToWrite.txt'

const write = async () => {
  console.log('Write smth to console:')
  process.stdin.on('data', data => {
    const stream = createWriteStream(PATH)
    stream.write(data)
    process.stdin.pause()
    console.log('Finished successfully')
  })
};

await write();
