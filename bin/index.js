#! /usr/bin/env node
const { program } = require("commander");
const generateProject = require("./generateProject");
program
  .version("1.0.0")
  .description("zero-cli： Select the project to the current folder");
program
  .command("init")
  .description("select project to init ")
  .action(async () => {
    generateProject();
  });

program
  .command("list")
  .description("show all project list")
  .action(() => {
    console.log("list");
    const templates = require("../templates/template");
    console.table(templates);
  });

// 添加项目
program
  .command("add")
  .description("add project")
  .action(() => {
    const fs = require("fs");
    const path = require("path");
    const templates = require("../templates/template.json");
    const inquirer = require("inquirer");
    const questions = [
      {
        type: "input",
        name: "description",
        message: "请输入项目描述",
      },
      {
        type: "input",
        name: "git_source",
        message: "请输入项目git地址",
      },
    ];
    inquirer.prompt(questions).then((answers) => {
      answers.id = Date.now();
      templates.push(answers);
      fs.writeFileSync(
        path.resolve(__dirname, "../templates/template.json"),
        JSON.stringify(templates)
      );
      console.log("添加成功");
    });
  });

// 删除项目  课根据id or 描述删除

program.command("delete <key>").action((key) => {
  const fs = require("fs");
  const path = require("path");
  const templates = require("../templates/template.json");
  const index = templates.findIndex(
    (item) => item.id == key || item.description == key
  );
  templates.splice(index, 1);
  fs.writeFileSync(
    path.resolve(__dirname, "../templates/template.json"),
    JSON.stringify(templates)
  );
  console.log("删除成功");
});
program.parse(process.argv);
