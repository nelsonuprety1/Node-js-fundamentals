//* Modules
// * CommonJS,every file is module(by default)
// * Modules - Encapsulated Code (Only Share Minimum)
const names = require('./3-firstModule.js');
const sayHi = require('./4-secondModule.js');
const data = require('./6-alternativeExportTechnique.js');

// When we are setting up everything if we have a function inside of the module that we invoke
// , yes that code will run even though we didnt assign it to a variable
require('./5-mind-grenade');

console.log(names);
sayHi('Nelson');
sayHi(names.monkey);
sayHi(names.peter);
console.log(data.singlePerson.name);
