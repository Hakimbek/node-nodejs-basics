import { parentPort, workerData } from 'worker_threads';

// n should be received from main thread
const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
  // This function sends result of nthFibonacci computations to main thread
  parentPort.on('message', n => {
    try {
      parentPort.postMessage({ data: nthFibonacci(n), id: workerData })
    } catch {
      parentPort.postMessage({ data: null, id: workerData })
    }
  })
};

sendResult();
