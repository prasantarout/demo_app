export const API_BASE_URL = 'https://jsonplaceholder.typicode.com';
export const getApiUrl = (endpoint) => API_BASE_URL + endpoint;
export const POSTS = getApiUrl('/posts');
export const UPDATE_POSTS = getApiUrl('/todos/');