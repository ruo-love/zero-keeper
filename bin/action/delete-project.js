const fs = require("fs");
const showList = require("../common/show-list");
const path = require("path");
module.exports = function addProject(key) {
  const templates = require("../config/template.json");
  const index = templates.findIndex(
    (item) => item.id == key || item.name == key
  );
  templates.splice(index, 1);
  fs.writeFileSync(
    path.resolve(__dirname, "../config/template.json"),
    JSON.stringify(templates)
  );
  console.log("delete success");
  showList();
};
