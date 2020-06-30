const fs = require("fs");
const util = require("util");

// fs.readFile("test.txt", "utf8", (err, data) => {
//   if (err) throw new Error(err);
//   console.log(data);
// });

const readFileAsync = util.promisify(fs.readFile);

// The built-in util package can be used to create Promise-based versions of functions using node style callbacks

// readFileAsync("test.txt", "utf8")
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
async function asyncRead(){
    const testData = await readFileAsync("test.txt", "utf8");
    console.log(testData);
}

asyncRead();
