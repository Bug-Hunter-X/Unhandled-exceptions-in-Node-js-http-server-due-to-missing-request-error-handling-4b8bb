const http = require('http');

const server = http.createServer((req, res) => {
  // This is where the bug lies. The 'end' event is not always emitted,
  // especially if the request body is large or the connection is dropped.
  req.on('end', () => {
    console.log('Request ended');
    res.end('Hello, world!');
  });

  req.on('error', (err) => {
    console.error('Request error:', err);
    res.statusCode = 500;
    res.end('Internal Server Error');
  });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});