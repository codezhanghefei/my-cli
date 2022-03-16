#! /usr/bin/env node
// 告诉操作系统执行这个脚本的时候，调用/usr/bin下的node解释器

import { Command } from 'commander';
import inquirer from 'inquirer';
import creatFrontEndModule from '../bin/frontEndModule.js';
import figlet from 'figlet';
import chalk from 'chalk';

const program = new Command();

program
.command('create <frontendModuleName>')
.description('create a frontend module')
.option('-f, --force', 'overwrite target directory if it exist', false)
.action(async(name, option) => {
  console.log('name', name);
  console.log('option', option);
  // inquirer.prompt([
  //   {
  //     type: 'input',
  //     name: 'outputPath',
  //     message: '要创建的模块的地址',
  //   }
  // ]);
  await creatFrontEndModule({ projectName: name, option });
})

program
.on('--help', () => {
  console.log('/r/n' + figlet.textSync('StreamLake', {
    font: 'Ghost',
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 120,
    whitespaceBreak: true
  }, function(err, data) {
    if (err) {
      console.log('Something went wrong...');
      console.dir(err);
      return;
    }
    console.log(data);
  }))
  console.log(`\r\nRun ${chalk.cyan(`zt <command> --help`)} for detailed usage of given command\r\n`)
})

program.parse();

