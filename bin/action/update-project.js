const inquirer = require("inquirer");
const fs = require("fs");
const showList = require("../common/show-list");
const path = require("path");
module.exports = async function addProject(key, data) {
  const templates = require("../config/template.json");
  const _template = [...templates];
  const index = _template.findIndex(
    (item) => item.id == key || item.name == key
  );

  const result = { ..._template[index], ...data };
  _template[index] = result;
  fs.writeFileSync(
    path.resolve(__dirname, "../config/template.json"),
    JSON.stringify(_template)
  );
  console.log("update success");
  showList();
};
