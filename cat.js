let fs = require('fs');

function cat(path) {
    fs.readFile(path, (err, data) => {
        if (err)    
            throw err;
        process.stdout.write(data);
        process.stdout.write(`\nprompt > `);
    });
}

module.exports = cat;