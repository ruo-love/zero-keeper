const fs = require("fs");
const path = require("path");
module.exports = function checkVersion(arg) {
  if (arg.version) {
    const pkg = require("../../package.json");
    console.log(`version: ${pkg.version}`);
  }
};
