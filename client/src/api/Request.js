import axios from "axios";

const URLs = {
  BASEURL: `http://localhost:5000/`,
  LOGIN: `/auth`,
  USERS: "/users",
  DEGREES: "/degrees",
};

const Api = axios.create({
  baseURL: URLs.BASEURL,
});

const Request = {
  read: (sURL) => {
    return Api.get(URLs[sURL]);
  },
  readSingle: (sPath) => {
    return Api.get(sPath);
  },

  logIn: (data) => {
    return Api.post(URLs["LOGIN"], data);
  },

  signUp: (data) => {
    return Api.post(URLs["USERS"], data);
  },

  getUsers: () => {
    return Api.get(URLs["USERS"]);
  },
};

export default Request;
