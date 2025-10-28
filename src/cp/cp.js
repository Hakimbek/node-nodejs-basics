import { fork } from 'child_process'

const spawnChildProcess = async (args) => {
  const childProcess = fork('src/cp/files/script.js', args);

  childProcess.on('message', (data) => {
    console.log(`Received from child process: ${data}`);
  })
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['Hello World']);
