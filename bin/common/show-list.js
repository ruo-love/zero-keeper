const Table = require("cli-table");
module.exports = function showList(
  args,
  options,
  clos = ["id", "name", "gitSource", "createTime", "tips"]
) {
  let _cols = [];
  if (args) _cols = clos.filter((item) => args[item]);
  if (_cols.length == 0) {
    _cols = clos;
  } else {
    _cols.unshift("id");
  }
  const templates = require("../config/template.json");
  const table = new Table({
    head: _cols,
    style: {
      border: ["green"],
    },
  });
  templates.forEach((item) => {
    table.push(_cols.map((col) => item[col]));
  });
  console.log(table.toString());
};
