const fs = require("fs");
const path = require("path");
module.exports = function addProject(importpath) {
  const templates = require(importpath);
  fs.writeFileSync(
    path.resolve(__dirname, "../config/template.json"),
    JSON.stringify(templates)
  );
  console.log("import success");
};
