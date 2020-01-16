const fs = require('fs');
var content;
fs.readFile('./text.txt','utf-8', function read(err, data) {
    if (err) {
        throw err;
    }
    content = data;
    console.log(content);  
});
console.log(arr['123']);