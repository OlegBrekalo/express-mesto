const path = require('path');

const usersFilePath = path.join(__dirname, '..', 'data', 'users.json');
const readJSONFile = require('../utils/readJSONFile');

module.exports.getUsers = (req, res) => {
  readJSONFile(usersFilePath)
    .then((data) => res.send(data))
    .catch((err) =>
      res.status(500).send({ message: `Ошибка чтения файла. Error message: ${err}` })
    );
};

module.exports.getUserById = (req, res) => {
  readJSONFile(usersFilePath)
    .then((data) => {
      const result = data.find((item) => {
        return item._id === req.params.id;
      });
      if (result) {
        res.send(result);
      } else {
        res.status(404).send({ message: `Нет пользователя с таким id.` });
      }
    })
    .catch((err) =>
      res.status(500).send({ message: `Ошибка чтения файла. Error message: ${err}` })
    );
};
