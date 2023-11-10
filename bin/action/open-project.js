const open = require("open");

module.exports = function (key) {
  const templates = require("../config/template.json");
  const index = templates.findIndex(
    (item) => item.id == key || item.name == key
  );
  open(templates[index].gitSource);
};
