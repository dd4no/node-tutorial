// CommonJS
// Every file is a module (default)
// Modules  = encapsulated code

// import object
const names = require('./4-names')
console.log(names);

// import function
const Hi = require('./5-utils')

// import array and object
const alt = require('./6-alternate-flavor')
console.log(alt.items);
console.log(alt.singlePerson);

// import and invoke function
require('./7-mind-grenade')

// call function
Hi('Rebecca')
Hi(names.dave)
Hi(names.larry)

