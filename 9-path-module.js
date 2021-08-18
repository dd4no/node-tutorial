// Built-in Path module

const path = require('path')

// Seperation mark
console.log(path.sep);

// Create a file path
const filePath = path.join('/content', 'subfolder', 'test.txt')
console.log(filePath);

// file path base
const base = path.basename(filePath)
console.log(base);

// absolute file path
const absolute = path.resolve(__dirname, 'content','subfolder', 'test.txt')
console.log(absolute);