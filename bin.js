#! /usr/bin/env node
// 告诉操作系统执行这个脚本的时候，调用/usr/bin下的node解释器

const chalk = require('chalk');
const program = require('commander');

program
.version('1.0')
.command('create <moduleName>')
.option('-f, --frontend', 'create frontend module')
.description('create a frontend module')
.action((moduleName, options) => {
  console.log('create a frontend module: ', chalk.blue(moduleName));
  console.log('create a frontend module: ', chalk.red(moduleName));
  console.log('options: ', options);
})

program.parse();
