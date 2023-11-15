const inquirer = require("inquirer");
const fs = require("fs");
const showList = require("../common/show-list");
const path = require("path");
module.exports = async function addProject(options, name, gitSource, key) {
  const templates = require("../config/template.json");
  if (name && gitSource) {
    const options = {
      name,
      gitSource,
      id: Date.now(),
      tips: "",
      createTime: new Date().toLocaleString(),
    };
    templates.push(options);
    fs.writeFileSync(
      path.resolve(__dirname, "../config/template.json"),
      JSON.stringify(templates)
    );
    console.log("add success");
    showList();
    return;
  }
  const questions = [
    {
      type: "input",
      name: "name",
      message: "please input project name",
    },
    {
      type: "input",
      name: "gitSource",
      message: "please input git clone url",
    },
    {
      type: "confirm",
      name: "need_tips",
      message: "Do you need to enter a project prompt?",
      default: false,
    },
  ];
  const answers = await inquirer.prompt(questions);
  if (answers.need_tips) {
    const { tips } = await inquirer.prompt([
      {
        type: "input",
        name: "tips",
        message: "please input project prompt",
      },
    ]);
    answers.tips = tips || "";
  } else {
    answers.tips = "";
  }
  delete answers.need_tips;

  answers.id = key || Date.now();
  answers.createTime = new Date().toLocaleString();
  templates.push(answers);
  fs.writeFileSync(
    path.resolve(__dirname, "../config/template.json"),
    JSON.stringify(templates)
  );
  console.log("add success");
  showList();
};
