const ejs = require('ejs');
const path = require('path');
const fs = require('fs');

const creatFrontEndModule = async (answer) => {
  // 模版文件目录
  const templatePath = path.join(__dirname, '..', 'templates/frontEndModule');

  // 当前终端目录
  const cwdPath = process.cwd();
  console.log('cwdPath:', cwdPath);

  // 从templatePath中读取模版文件
  const files = fs.readdirSync(templatePath);
  files.forEach((file) => {
    console.log('file:', file);
    // 使用ejs 渲染对应的模版文件
    // renderFile(模版文件地址，需要渲染的数据)
    ejs.renderFile(path.join(templatePath, file), answer).then(data => {
      // 生成 处理后的文件
      fs.writeFileSync(path.join(cwdPath, file), data);
    })
  })
};

module.exports = creatFrontEndModule;