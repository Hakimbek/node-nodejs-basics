import { argv } from 'process';

const parseArgs = () => {
  let result = '';

  for (let i = 2; i < argv.length; i+=2) {
    result += `${argv[i].slice(2)} is ${argv[i + 1]}, `;
  }

  console.log(result.trim().substring(0, result.length - 2));
};

parseArgs();
