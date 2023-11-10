#! /usr/bin/env node
const { exec } = require("child_process");
const inquirer = require("inquirer");
const templates = require("../templates/template");
async function generateProject() {
  const inqu = await inquirer.prompt([
    {
      type: "rawlist",
      name: "project",
      message: "Please select project:",
      choices: templates.map((template) => ({
        name: template.description,
        value: template.git_source,
      })),
    },
  ]);
  const gitCommand = `git clone ${inqu.project}`;
  // 使用 exec 函数执行 Git 命令
  exec(gitCommand, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing Git command: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`Git command STDERR: ${stderr}`);
    }
    // 输出 Git 命令的结果
    console.log(`Git command STDOUT:\n${stdout}`);
    console.log(`Project created successfully!`);
  });
}
module.exports = generateProject;
