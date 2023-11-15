const Table = require("cli-table");
module.exports = function showList(
  args = {},
  options,
  data = [],
  clos = ["id", "name", "gitSource", "createTime", "starts", "size", "tips"]
) {
  let _cols = [];
  if (Object.keys(args).length) _cols = clos.filter((item) => args[item]);
  if (_cols.length == 0) {
    _cols = clos.slice(0, 3);
  } else {
    _cols.unshift("id", "name");
  }
  let templates = [];
  if (data.length) {
    templates = data;
  } else {
    templates = require("../config/template.json");
  }
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
