import { apiClient } from "./config.js";

export const apiSignUp = async (payload) => {
  return apiClient.post("/auth/signup", payload);
};

export const apiCheckIfUsernameExists = async (userName) => {
  return apiClient.get(`/auth/${userName}`);
};
