import { Worker } from 'worker_threads';
import os from 'os';

const performCalculations = async () => {
  const cpus = os.cpus();
  const result = new Array(cpus.length);
  let completedWorkers = 0

  for (let i = 0; i < cpus.length; i++) {
    const worker = new Worker('./src/wt/worker.js', { workerData: i });

    worker.postMessage(i + 10);

    worker.on('message', ({data, id}) => {
      result[id] = { status: 'resolved', data };
      worker.terminate()
      completedWorkers++

      if (completedWorkers === cpus.length) {
        console.log(result)
      }
    });
  }
};

await performCalculations();
