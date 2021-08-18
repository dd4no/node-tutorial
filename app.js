// npm = global command
// npm --version = version info

// local dependency = Use only for this project
// npm i <packageName>

// global dependency = use in any project
// npm install -g <packageName>
// sudo install -g <packageName> (mac)

// package.json = manifest file (important info about project/package)
// manual approach = create root file and edit
// npm init = step by step guided
// npm init -y = all defaults

const _= require('lodash');

const items = [1,[2,[3,[4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);