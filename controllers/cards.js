const path = require('path');

const usersFilePath = path.join(__dirname, '..', 'data', 'cards.json');
const readJSONFile = require('../utils/readJSONFile');

module.exports.getCards = (req, res) => {
  readJSONFile(usersFilePath)
    .then((data) => res.send(data))
    .catch((err) =>
      res.status(500).send({ message: `Ошибка чтения файла. Error message: ${err}` })
    );
};
