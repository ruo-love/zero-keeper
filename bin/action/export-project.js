const fs = require("fs");
const path = require("path");
module.exports = function addProject(exportpath) {
  const templates = require("../config/template.json");
  fs.writeFileSync(
    path.resolve(exportpath, "template.json"),
    JSON.stringify(templates)
  );
  console.log("export success");
};
