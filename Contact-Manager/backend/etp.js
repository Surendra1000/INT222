const http = require('http');

function calculateFactorial(number) {
  let factorial = 1;
  for (let i = 2; i <= number; i++) {
    factorial *= i;
  }
  return factorial;
}

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url.startsWith('/factorial')) {
    const number = parseInt(req.url.split('=')[1]);
    if (isNaN(number)) {
      res.statusCode = 400;
      res.end('Invalid number provided');
      return;
    }

    const factorial = calculateFactorial(number);
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(`The factorial of ${number} is ${factorial}`);
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

server.listen(3500, () => {
  console.log('Server listening on port 3000');
  console.log(factorial);
});
