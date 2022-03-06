//* Modules
// * CommonJS,every file is module(by default)
// * Modules - Encapsulated Code (Only Share Minimum)
const names = require('./3-firstModule.js');
const sayHi = require('./4-secondModule.js');
const data = require('./6-alternativeExportTechnique.js');

console.log(names);
sayHi('Nelson');
sayHi(names.monkey);
sayHi(names.peter);
console.log(data.singlePerson.name);
