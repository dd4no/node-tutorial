//  Built-in FS module - Sync

const {readFileSync, writeFileSync} = require('fs');

console.log('start');

// read files and store in variables
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')
// console.log(first, second);

// write by appending results in document
writeFileSync('./content/result-sync.txt', `Here is the result: ${first}, ${second}`, {flag: 'a'})
console.log('done');
console.log('next');

