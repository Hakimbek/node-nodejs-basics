import { env } from 'node:process';

const parseEnv = () => {
  let result = '';

  for (let envKey in env) {
    if (envKey.startsWith('RSS')) {
      result += `${envKey}=${env[envKey]}; `;
    }
  }

  console.log(result.trim().substring(0, result.length - 2));
};

parseEnv();
