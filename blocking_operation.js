const fs = require('fs');

console.log("Starting blocking operation");

// Write the file synchronously which means it will block the event loop

const data = fs.readFileSync('contacts.txt', 'utf-8');
console.log(data);

console.log("File read operation completed");

/*Expected Output:
Starting blocking operation
<Sayantan Pal 9832524550
Samriddhi pal 8388987810>
File read operation completed
*/