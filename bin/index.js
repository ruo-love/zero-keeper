#! /usr/bin/env node
const { program } = require("commander");
const generateProject = require("./generateProject");
program.version("1.0.0").description("zero-cli： Select the project to the current folder");
program
  .command("init")
  .description("select project to init ")
  .action(async () => {
    generateProject();
  });

program.parse(process.argv);
