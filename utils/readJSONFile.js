const fsPromise = require('fs').promises;

function readJSONFile(path) {
  return fsPromise.readFile(path, { encoding: 'utf8' }).then((data) => JSON.parse(data));
}
module.exports = readJSONFile;
