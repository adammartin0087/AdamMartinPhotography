import axios from "axios";

axios.defaults.baseURL = "https://v9x0gq6xk3.execute-api.us-west-1.amazonaws.com"; // process.env.REACT_APP_API_URL;

axios.interceptors.response.use(null, error => {
  // const expectedError = error.response && error.response.status >= 400 && error.response.status < 500;
  return Promise.reject(error);
});

function setAuthHeader(token) {
  if (token) axios.defaults.headers.common["Authorization"] = token;
  else delete axios.defaults.headers.common["Authorization"];
}

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setAuthHeader
};
