// Built-in OS module

const os = require('os')

// current user info
const user = os.userInfo();
console.log(user);

// system uptime in seconds
console.log(os.uptime());

// current operating system info
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentOS);