import { apiClient } from "./config";

export const apiAddEducation = async (payload) => {
  return apiClient.post("/education", payload);
};

export const apiGetEducation = async () => {
  return apiClient.get("/education");
};

export const apiGetEducationById = async (id) => {
  return apiClient.get(`/education/${id}`);
};

export const apiUpdateEducation = async (id, payload) => {
  return apiClient.patch(`/education/${id}`, payload);
};

export const apiDeleteEducation = async (id) => {
  return apiClient.delete(`/education/${id}`);
};
