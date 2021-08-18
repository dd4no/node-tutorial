// GLOBALS - NO WINDOW

// __dirname    = current directory path
// __filename   = file name
// process      = current execution environment info
// module       =  current module info (file)

// require      = function to use modules (CommonJS)

console.log(__dirname);
console.log(__filename);
console.log(process);

setInterval(() => {
    console.log('Hello World');
}, 1000);