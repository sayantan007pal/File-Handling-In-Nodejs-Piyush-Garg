const fs = require('fs');

// Read the file synchronously which means it will block the event loop
const data = fs.writeFileSync('test_1.txt', "hey synchronous world");
console.log(data); // undefined