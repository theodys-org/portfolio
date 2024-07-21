import { apiClient } from "./config";

export const apiAddSkill = async (payload) => {
  return apiClient.post("/skills", payload);
};

export const apiGetSkills = async () => {
  return apiClient.get("/skills");
};

export const apiGetSkillById = async (id) => {
  return apiClient.get(`/skills/${id}`);
};

export const apiUpdateSkill = async (id, payload) => {
  return apiClient.patch(`/skills/${id}`, payload);
};

export const apiDeleteSkill = async (id) => {
  return apiClient.delete(`/skills/${id}`);
};
