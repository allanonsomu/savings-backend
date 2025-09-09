const fs = require('fs');

const path = require('path');

const controller = {};

fs.readdirSync(__dirname).forEach((directory) => {
  if (directory !== 'index.js') {
    const controllersDirectory = path.join(__dirname, `${directory}`);
    fs.readdirSync(controllersDirectory)
      .forEach(async (file) => {
        const contr = await import(path.join(__dirname, `${directory}/${file.split('.')[0]}`));
        controller[file.split('.')[0]] = contr;
      });
  }
});

module.exports = controller;
