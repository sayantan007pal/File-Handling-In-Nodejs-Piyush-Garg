const fs = require('fs');

console.log("Starting non-blocking operation");

// Write the file asynchronously which means it will not block the event loop
fs.readFile('contacts.txt', 'utf-8', (err, result) => {
    console.log(result); 
});
    
console.log("File read operation completed");



/*Expected Output:
Starting non-blocking operation
File read operation completed
<Sayantan Pal 9832524550
Samriddhi pal 8388987810>
*/