import { pipeline, Transform } from 'stream'

const transform = async () => {
  console.log('Write smth to console:')
  pipeline(
    process.stdin,
    new Transform({
      transform(chunk, encoding, callback) {
        callback(null, `${chunk.reverse()}\n`)
      }
    }),
    process.stdout,
    (err) => {
      if (err) throw err
    }
  )
};

await transform();
