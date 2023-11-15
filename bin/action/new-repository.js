const { Octokit } = require("@octokit/rest");
const inquirer = require("inquirer");
const fetch = require("node-fetch");
const addProject = require("./add-project");
module.exports = async function newRepository() {
  //使用交互式命令行询问 英语
  const questions = [
    {
      type: "input",
      name: "name",
      message: "please input repository name",
    },
    {
      type: "input",
      name: "description",
      message: "please input repository description",
    },
    {
      type: "confirm",
      name: "private",
      message: "this repository is private?",
      default: false,
    },
  ];
  const answers = await inquirer.prompt(questions);
  const { name, description, private } = answers;
  // 在此替换为你的 GitHub 访问令牌
  const userConfig = require("../config/user.json");

  // 创建 Octokit 实例
  const octokit = new Octokit({
    auth: userConfig.accessToken,
    request: { fetch },
  });

  // 创建 GitHub 仓库
  try {
    const response = await octokit.repos.createForAuthenticatedUser({
      name,
      description,
      private,
    });
    console.log(
      `Repository created successfully. URL: ${response.data.html_url}\n`
    );
    console.log(`
    git init
    git add README.md
    git commit -m "first commit"
    git branch -M main
    git remote add origin ${response.data.clone_url}
    git push -u origin main
    `);
    inquirer
      .prompt([
        {
          type: "confirm",
          name: "addProject",
          message: "add this project to your project list?",
          default: true,
        },
      ])
      .then((answers) => {
        if (answers.addProject) {
          addProject(null, name, response.data.clone_url,key);
        }
      });
  } catch (error) {
    console.error("Error creating repository:", error.message);
  }
};
