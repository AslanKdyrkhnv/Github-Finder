import axios from "axios";

const GITHUB_URL = process.env.REACT_APP_GITHUB_LINK;
const GITHUB_KEY = process.env.REACT_APP_GITHUB_KEY;

const github = axios.create({
  baseURL: GITHUB_URL,
  headers: {
    Authorization: `token ${GITHUB_KEY}`,
  },
});

// SEARCH USERS
export const searchUsers = async (text) => {
  const params = new URLSearchParams({
    q: text,
  });
  const response = await github.get(`/search/users?${params}`);
  return response.data.items;
};

// GET USER and REPOS
export const getUserAndRepos = async (name) => {
  const extend = new URLSearchParams({
    per_page: 10,
    sort: "created",
  });
  const [user, repos] = await Promise.all([
    github.get(`/users/${name}`),
    github.get(`/users/${name}/repos?${extend}`),
  ]);
  return { user: user.data, repos: repos.data };
};
