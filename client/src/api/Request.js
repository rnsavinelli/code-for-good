import axios from "axios";

const URLs = {
  BASEURL: `http://localhost:5000/`,
  LOGIN: `/auth`,
  USERS: "/users",
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
  signIn: () => {
    return Api.post(URLs["LOGIN"], {
      user: "admin",
      password: "admin",
    });
  },

  getUsers: () => {
    return Api.get(URLs["USERS"]);
  },
};

export default Request;
