const fs = require('fs');

fs.readFile('input.txt', 'utf8', function(err, data) {
    if(err) {
        console.log(err.message);
    } else {
        console.log(data);
    }
});

// let message = "Hello, world";
// console.log(message);