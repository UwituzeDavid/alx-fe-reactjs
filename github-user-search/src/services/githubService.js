import axios from 'axios';

export const fetchUserData = async (username) => {
  const response = await axios.get(`https://api.github.com/users/${username}`);
  return response.data;
};
export const fetchAdvancedUsers = async ({ username, location, minRepos }) => {
    let query = '';
  
    if (username) query += `${username} in:login `;
    if (location) query += `location:${location} `;
    if (minRepos) query += `repos:>=${minRepos} `;
  
    const response = await axios.get(`https://api.github.com/search/users?q=${encodeURIComponent(query.trim())}`);
    return response.data;
  };
  const token = import.meta.env.VITE_APP_GITHUB_API_KEY;

const response = await axios.get(`https://api.github.com/users/${username}`, {
  headers: {
    Authorization: `Bearer ${token}`
  }
});
