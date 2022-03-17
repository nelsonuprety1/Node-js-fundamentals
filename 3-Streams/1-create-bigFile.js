const { writeFileSync } = require('fs');
for (let i = 0; i < 100000; i++) {
  writeFileSync('../content/moreBig.txt', `Hello World ${i}\n`, { flag: 'a' });
}
