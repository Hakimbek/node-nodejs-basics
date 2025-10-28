const parseArgs = () => {
  let result = '';

  for (let i = 2; i < process.argv.length; i+=2) {
    result += `${process.argv[i].slice(2)} is ${process.argv[i + 1]}, `;
  }

  console.log(result.trim().substring(0, result.length - 2));
};

parseArgs();
