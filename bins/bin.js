#! /usr/bin/env node
// 告诉操作系统执行这个脚本的时候，调用/usr/bin下的node解释器

// 自定义命令
import { Command } from 'commander';
// 输出美化工具
import chalk from 'chalk';
// loading效果
import ora from 'ora';

const program = new Command();
const spinner = ora('loading...');
// loading 颜色
spinner.color = 'blue';

program
.version('1.0')
.command('create <moduleName>')
.option('-f, --frontend', 'create frontend module')
.description('create a frontend module')
.action((moduleName, options) => {
  spinner.start();

  console.log('create a frontend module: ', chalk.blue(moduleName));
  console.log('create a frontend module: ', chalk.red(moduleName));
  console.log('options: ', options);

  // 改变文字
  setTimeout(() => {
    spinner.text = 'loading start';
  }, 2000);

  setTimeout(() => {
    spinner.text = 'loading done';
  }, 4000);

  // 成功
  setTimeout(() => {
    spinner.succeed();
  }, 6000);
})

program.parse();
