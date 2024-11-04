import Cookies from 'js-cookie';

// Set token with a username-based key, expires in 24 hours (1 day)
export const setAuthToken = (username, token) => {
  Cookies.set(`token_${username}`, token, { expires: 1 });
};

// Retrieve the token based on the username
export const getAuthToken = (username) => {
  return Cookies.get(`token_${username}`);
};

// Remove the token using the username (e.g., during logout)
export const removeAuthToken = (username) => {
  Cookies.remove(`token_${username}`);
};
