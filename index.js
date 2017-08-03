const fs = require('fs');
const readline = require('readline');
const markdownpdf = require('markdown-pdf');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('What is the filename? ', (filename) => {
    rl.close();   // closes interface
    fs.readFile(filename, (err, buffer) => {
        if (err) {
            console.log(err.message);
            return;
        }
        let content = buffer.toString();
        markdownpdf().from.string(content)
                 .to(filename + '.pdf', () => {
                     console.log('OMG IT WORKEDZED');
                 })
        // let upcased = content.toUpperCase();
        // console.log(upcased);
    });
});