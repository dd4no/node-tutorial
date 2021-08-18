//  Built-in FS module - Async

const { readFile, writeFile } = require('fs')

console.log('start');

// read a file and store it
readFile('./content/first.txt', 'utf8', (err, result)=> { 
    if(err)  {
        console.log(err);
        return;
    }
    // console.log(result);
    const first = result;
    // read another file and store it
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        // console.log(result);
        const second = result
        // write the results to document
        writeFile('./content/result-async.txt',
            `Here is the result: ${first}, ${second}`,
            (err, result) => {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log('done');
            })
    })
    
})
console.log('next');