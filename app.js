const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const { PORT = 3000 } = process.env;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log('We start');
});
