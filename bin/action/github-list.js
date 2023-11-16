const axios = require("axios");
const path = require("path");
const fs = require("fs");
const showList = require("../common/show-list");
module.exports = async function getAllRepos(args, options) {
  const userConfig = require("../config/user.json");
  try {
    const response = await axios.get(
      `https://api.github.com/users/${userConfig.username}/repos`,
      {
        headers: {
          Authorization: `Bearer ${userConfig.accessToken}`,
        },
      }
    );
    const repos = response.data.map((repo) => {
      return {
        id: repo.id,
        name: repo.name,
        gitSource: repo.clone_url,
        createTime: repo.created_at,
        tips: repo.description,
        size: repo.size,
        starts: repo.stargazers_count,
      };
    });
    showList(args, options, repos);
  } catch (error) {
    console.error("Error fetching GitHub repositories:", error.message);
  }
};
