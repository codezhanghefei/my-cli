#! /usr/bin/env node
// 告诉操作系统执行这个脚本的时候，调用/usr/bin下的node解释器

import inquirer from 'inquirer';
import creatFrontEndModule from '../bin/frontEndModule.js';

console.log('======= my-cli start =======');

inquirer.prompt([
  {
    type: 'list',
    name: 'projectType',
    message: '请选择要创建的内容',
    choices: [
      'my-cli-demo',
      'frontEnd',
      'FromEnd-module',
      'nodeServe',
      'nodeServer-module',
    ]
  }
]).then(async answers => {
  if (answers.projectType === 'my-cli-demo') {
    inquirer.prompt([
      {
        type: 'input',
        name: 'projectName',
        message: '请输入项目名称',
        default: 'my-cli',
      },
    ]).then(async answers => {
      await creatFrontEndModule(answers);
    })
  } else {
    console.log('======= 功能开发中，敬请期待 =======');
  }
}).catch(error => {
  console.log(error);
})
