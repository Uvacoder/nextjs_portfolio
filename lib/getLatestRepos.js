import axios from "axios";

export const getLatestRepos = async (data, token) => {

  try {
    const username = data.githubUsername;

    if (token) {
      const res = await axios.get(
        `https://api.github.com/search/repositories?q=user:${username}&sort=updated&order=desc&page=1&per_page=6`,
        {
          headers: {
            Authorization: `token ${token}`,
          },
        }
      );
      return res.data.items;
    } else {
      const res = await axios.get(
        `https://api.github.com/search/repositories?q=user:${username}&sort=updated&order=desc&page=1&per_page=6`
      );
      return res.data.items;
    }
  } catch (err) {
    console.log(err);
  }
};