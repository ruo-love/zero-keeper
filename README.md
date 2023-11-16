## keeper 是一款本地项目管理工具 【请全局安装】

<span style="color: yellow;">无论您身居何处, keeper 中的项目都唯您所把控！</span>

### feature

1. 可随时随地的在全局终端对 keeper 中的项目进行可视化管控，免去您频繁登录 github\gitlab 查找项目
2. 一键克隆 keeper 中的某个项目
3. 一键创建 github 仓库，同时加入本地 keeper 仓库
4. 通过简短的终端命令可对 keeper 中的项目增删改查
5. 支持配置导入、导出
6. github accessToken 配置
7. 一键打开项目的 github 仓库

### install

全局安装 keeper,安装完成即可使用

```
npm i zero-keeper -g
```

配置 github accessToken

```
keeper user -a accessToken

```

### 命令文档

#### 查看用户配置

```
keeper user

```

#### 显示列表

```
keeper list [-n | -g | -p | -t | -s | -a]

// 显示keeper管理的项目 参数为指定显示某几个字段；默认显示所有字段；

```

#### 克隆拉取 keeper 中的指定项目

```
keeper init

```

#### 添加项目到 keeper 管理器中

```
keeper add

// 可指定: 项目名、git clone 地址、tips 字段

```

#### 移除 keeper 中的某个项目

```
keeper delete <key>

// key 可以是id或者name

```

#### 更新 keeper 中的某个项目

```
keeper update <key> [-n | -g | -p | -t]


// key为id 或者 name;
// "-n, --name [name]", "Name of the project"
// "-g, --gitSource [gitSource]", "Git source URL"
// "-p, --tips [tips]", "Additional tips"
// "-t, --createTime [createTime]", "Create time"
```

#### export 导出 keeper 当前管理的项目配置文件

```
keeper export <path>

// path 为存储地址

```

#### import 将项目配置文件导入 keeper

```
keeper import <path>

// path 为配置文件的地址

```

#### new 一键创建 github 仓库

```
keeper new

//可指定项目名、描述、是否私有；创建完成可选择是否将该新项目导入keeper中管理

```

/\*\*

- 获取 github 项目
  \*/
  program
  .description("get project from github")
  .command("github")
  .option("-g, --gitSource", "In addition to id, only gitSource is displayed")
  .option("-p, --tips", "In addition to id, only tips is displayed")
  .option("-t, --createTime", "In addition to id, only createTime is displayed")
  .option("-s, --size", "In addition to id, only size is displayed")
  .option("-a, --starts", "In addition to id, only starts is displayed")
  .action(require("./action/github-list"));

/\*\*

- 将 github 项目添加到项目列表
  \*/
  program
  .description("add project from github")
  .command("github-add <key>")
  .action(require("./action/github-add"));

#### new 一键 github 所有项目

```
keeper github [-n | -g | -p | -t | -s | -a]

```

#### 将 github 项目添加到 keeper 数据库中

```
keeper github-add <key>    // key 为github 项目id; 该id可以通过 keeper github 命令查看

```
