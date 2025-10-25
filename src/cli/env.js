const parseEnv = () => {
  let result = '';

  for (let envKey in process.env) {
    if (envKey.startsWith('RSS')) {
      result += `${envKey}=${process.env[envKey]}; `;
    }
  }

  console.log(result.trim().substring(0, result.length - 2));
};

parseEnv();
