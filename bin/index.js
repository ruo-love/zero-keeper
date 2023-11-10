#! /usr/bin/env node
const { program } = require("commander");
/**
 * 选择项目
 */
program.version("1.0.0").name(`
    欢迎使用 keeper\n
    无论您身居何处, keeper 中的项目都唯您所把控！\n
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
  .option("-n, --name", "In addition to id, only name is displayed")
  .option("-g, --gitSource", "In addition to id, only gitSource is displayed")
  .option("-p, --tips", "In addition to id, only tips is displayed")
  .option("-t, --createTime", "In addition to id, only createTime is displayed")
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
  .option("-g, --gitSource [gitSource]", "Git source URL")
  .option("-p, --tips [tips]", "Additional tips")
  .option("-t, --createTime [createTime]", "Create time")
  .action(require("./action/update-project"));

/**
 * 查看用户配置信息
 */
program
  .description("show user config")
  .command("user")
  .option("-a, --accessToken [accessToken]", "GitHub access token")
  .action(require("./action/user-config"));

/**
 * 通过浏览器打开项目
 */
program
  .description("open project by browser")
  .command("open <key>")
  .action(require("./action/open-project"));
program.parse(process.argv);
