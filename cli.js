#! /usr/bin/env node
// 告诉操作系统执行这个脚本的时候，调用/usr/bin下的node解释器

console.log('======= my-cli start =======');

const inquirer = require('inquirer');
const creatFrontEndModule = require('./bin/frontEndModules');

inquirer.prompt([
  // {
  //   type: 'input',
  //   name: 'projectName',
  //   message: '请输入项目名称',
  //   default: 'my-cli',
  // },
  // {
  //   type: 'list',
  //   name: 'projectType',
  //   message: '请选择要创建的内容',
  //   choices: [
  //     'frontEnd',
  //     'FromEnd-module',
  //     'nodeServe',
  //     'nodeServer-module',
  //   ]
  // },
]).then(async answers => {
  await creatFrontEndModule({ projectName: 'test' });
  console.log('======= my-cli end =======');
}).catch(error => {
  console.log(error);
})
