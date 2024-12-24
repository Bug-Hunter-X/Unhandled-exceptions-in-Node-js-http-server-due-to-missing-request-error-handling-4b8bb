# Node.js Http Server Unhandled Exception Bug

This repository demonstrates a common but easily overlooked bug in Node.js HTTP servers: the lack of proper error handling on the request object.  This can lead to unhandled exceptions and server crashes, particularly under high load or unstable network conditions.

## The Bug

The `bug.js` file contains a simple HTTP server.  The problem lies in its reliance on the `'end'` event of the incoming request. If the request encounters an error (e.g., the client disconnects prematurely, or the request body is too large), the `'end'` event might not be emitted.  This results in the server hanging or crashing without any informative error message.

## The Solution

The `bugSolution.js` file provides a corrected version. The key improvement is the addition of an `'error'` event listener to the request object. This listener gracefully handles potential errors, preventing unexpected server crashes and providing more robust error handling.

## How to Reproduce

1. Clone this repository.
2. Navigate to the repository's directory.
3. Run `node bug.js`.
4. Simulate a network error or send a large request to trigger the bug.  Observe the behavior.
5. Run `node bugSolution.js`. This version will gracefully handle the errors.