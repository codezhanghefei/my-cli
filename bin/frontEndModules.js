const ejs = require('ejs');
const path = require('path');
const fs = require('fs');

const creatFrontEndModule = async (answer) => {
  // 模版文件目录
  const templatePath = path.join(__dirname, '..', 'templates/frontEndModule');

  // 当前终端目录
  const cwdPath = process.cwd();
  console.log('cwdPath', cwdPath);

  // 从templatePath中读取模版文件
  const files = fs.readdirSync(templatePath);
  files.forEach((file) => {
    console.log('file', file);
  })
};

module.exports = creatFrontEndModule;