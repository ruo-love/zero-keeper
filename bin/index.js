#! /usr/bin/env node
const { program } = require("commander");
/**
 * 选择项目
 */
program.version("1.0.0").name(`
    欢迎使用 zero-cli\n
    本地快速可视化记录git项目\n
`);

program
  .command("init")
  .description("Select the project to the current folder")
  .action(require("./action/generate-project"));

/**
 * 显示项目列表
 */
program
  .command("list")
  .description("show project list")
  .action(require("./common/show-list"));

/**
 * 添加项目
 */
program
  .description("add project")
  .command("add")
  .action(require("./action/add-project"));

/**
 * 删除项目  课根据id or 描述删除
 */
program
  .description("delete project")
  .command("delete <key>")
  .action(require("./action/delete-project"));

/**
 * 导出配置文件
 */
program
  .description("export project")
  .command("export <path>")
  .action(require("./action/export-project"));

/**
 * 导入配置文件
 */
program
  .description("import project")
  .command("import <path>")
  .action(require("./action/import-project"));

/**
 * 创建github仓库
 */
program
  .description("new gitHub repository")
  .command("new")
  .action(require("./action/new-repository"));

/**
 * 更新项目
 */

program
  .description("update project")
  .command("update <key>")
  .option("-n, --name [name]", "Name of the project")
  .option("-g, --git-source [git_source]", "Git source URL")
  .option("-p, --tips [tips]", "Additional tips")
  .option("-t, --create-time [create_time]", "Create time")
  .action(require("./action/update-project"));
program.parse(process.argv);
