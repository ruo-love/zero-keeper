const fs = require("fs");
const path = require("path");
module.exports = async function userConfig(args) {
  const userConfig = require("../config/user.json");
  if (args.accessToken) {
    userConfig.accessToken = args.accessToken;
    fs.writeFileSync(
      path.resolve(__dirname, "../config/user.json"),
      JSON.stringify(userConfig)
    );
    console.log("update success");
  }
  console.log("user config\n");
  console.log(`--accessToken: ${userConfig.accessToken}`);
};
