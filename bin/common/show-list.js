const Table = require("cli-table");
module.exports = function showList() {
  const templates = require("../config/template.json");
  const table = new Table({
    head: ["id", "name", "git_source", "create_time","tips"],
  });
  templates.forEach((item) => {
    table.push([item.id, item.name, item.git_source, item.create_time,item.tips]);
  });
  console.log(table.toString());
};
