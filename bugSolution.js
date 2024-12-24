const http = require('http');

const server = http.createServer((req, res) => {
  req.on('error', (err) => {
    console.error('Request error:', err);
    res.statusCode = 500;
    res.end('Internal Server Error');
  });

  req.on('data', (chunk) => {
    // Handle incoming data chunks
  });

  req.on('end', () => {
    console.log('Request ended');
    res.end('Hello, world!');
  });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});