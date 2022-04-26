let fs = require('fs');

const reader = fs.createReadStream('./users.csv');
reader.on('data', (data) => {
    console.log(data.toString());
});