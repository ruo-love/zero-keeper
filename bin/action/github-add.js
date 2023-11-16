const inquirer = require("inquirer");
const fs = require("fs");
const showList = require("../common/show-list");
const path = require("path");
const githubList = require("./github-list");
module.exports = async function addGithubProject(key) {
  console.log(key);
  const templates = require("../config/template.json");
  const hasKey = templates.map((item) => item.id).includes(key);
  if (hasKey) {
    console.log("key already exists, please re-enter");
    return;
  } else {
    const repos = await githubList();
    const answers = repos.find((repo) => repo.id == key);
    templates.unshift(answers);
    fs.writeFileSync(
      path.resolve(__dirname, "../config/template.json"),
      JSON.stringify(templates)
    );
    console.log("add success");
  }
};
