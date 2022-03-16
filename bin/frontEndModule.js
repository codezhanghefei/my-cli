import ejs from 'ejs';
import * as path from 'path';
import * as fs from 'fs';
import * as fse from 'fs-extra';
import inquirer from 'inquirer';
import chalk from 'chalk';

const creatFrontEndModule = async ({ option, ...answer }) => {
  // 当前终端目录
  const cwdPath = process.cwd();
  console.log('cwdPath:', cwdPath);

  // 判断当前目录是否已经存在
  const targetDir = path.join(cwdPath, answer.projectName);
  
  const dirIsExisted = await fse.pathExists(targetDir);
  // 存在且不强制替换
  if (dirIsExisted && !option.force) {
    inquirer.prompt([
      {
        type: 'list',
        name: 'forceCreate',
        message: '强制覆盖现有模块？',
        choices: [
          'yes',
          'no',
        ]
      }
    ]).then(({ forceCreate }) => {
      // 覆盖
      if (forceCreate) {
        createModule(answer);
      } else {
        console.log(chalk.red('模块已经存在'));
      }
    })
  } else {
    createModule(answer);
  }
};

/**
 * 创建 模块
 * @param {*} answer 
 */
function createModule(answer) {
  // 创建目标文件夹
  const cwdPath = process.cwd();
  fs.mkdirSync(path.join(cwdPath, answer.projectName));

  // 输出文件地址
  const outputPath = path.join(cwdPath, answer.projectName);

  // 模版文件目录
  const templatePath = path.join(cwdPath, 'templates/frontEndModule');
  // 递归渲染文件
  recurseReadFiles(templatePath, outputPath, answer);
}

/**
 * 递归渲染文件
 * @param {*} templatePath 
 * @param {*} outputPath 
 * @param {*} answer 
 */
function recurseReadFiles (templatePath, outputPath, answer) {
  // 读取模版文件
  const files = fs.readdirSync(templatePath);

  files.forEach((file) => {
    const fileStat = fs.statSync(path.join(templatePath, file));

    // 判断文件是不是文件夹
    if (fileStat.isDirectory()) {
      fs.mkdirSync(path.join(outputPath, file));
      recurseReadFiles(path.join(templatePath, file), path.join(outputPath, file), answer);
    } else {
      renderFile(file, templatePath, outputPath, answer);
    }
  })
}

/**
 * 文件渲染
 * @param {*} file 
 * @param {*} templatePath 
 * @param {*} outputPath 
 * @param {*} content 
 */
// 使用ejs 渲染对应的模版文件
function renderFile(file, templatePath, outputPath, content) {
  // renderFile(模版文件地址，需要渲染的数据)
  ejs.renderFile(path.join(templatePath, file), content).then(data => {
    // 生成 处理后的文件
    fs.writeFileSync(path.join(outputPath, file), data);
  })
}

export default creatFrontEndModule;
