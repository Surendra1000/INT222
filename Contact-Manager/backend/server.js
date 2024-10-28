const http = require('http');
const { number } = require('joi');

function calculateFactorial(number) {
  
    if (number === 0 || number === 1) {
      return 1;
    } else {
      return number * calculateFactorial(number - 1);
    }
  }
  


const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url.startsWith('/calculate')) {
    const number = parseInt(req.url.split('=')[1]);
    console.log(calculateFactorial);
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

server.listen(4000, () => {
  console.log('Server listening on port 4000');
});
