// import http from 'http';
// import url from 'url';
const http = require('http');
const url = url('url');

// Function to calculate factorial
function factorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}

// Create a server
const server = http.createServer((req, res) => {
    // Parse URL
    const queryObject = url.parse(req.url, true).query;

    // Check if 'number' parameter is provided
    if (queryObject.number) {
        const num = parseInt(queryObject.number);

        if (!isNaN(num)) {
            // Calculate factorial
            const result = factorial(num);

            // Send response
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end(`Factorial of ${num} is: ${result}`);
        } else {
            // Invalid number
            res.writeHead(400, {'Content-Type': 'text/plain'});
            res.end('Invalid number provided');
        }
    } else {
        // No number provided
        res.writeHead(400, {'Content-Type': 'text/plain'});
        res.end('Please provide a number in the query parameter');
    }
});

// Set port and start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});