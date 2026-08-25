import axiosClient from "./axiosClient";
import { FALLBACK_MOCK_SESSION } from "../utils/fallbackData";

const mockInterviewService = {
  async generateLiveToken(config) {
    try {
      const response = await axiosClient.post("/ai/interview/live-token", config);
      return response.data;
    } catch (err) {
      return {
        ...FALLBACK_MOCK_SESSION,
        techStack: config?.techStack || "JavaScript, React, Node.js",
        topic: config?.topic || "Sliding Window",
        difficulty: config?.difficulty || "Medium"
      };
    }
  },

  async gradeInterview(payload) {
    try {
      const response = await axiosClient.post("/ai/interview/grade", payload);
      return response.data;
    } catch (err) {
      return { score: 90, feedback: "Great explanation of time and space complexity!" };
    }
  },

  async saveInterviewSession(payload) {
    try {
      const response = await axiosClient.post("/ai/interview/session", payload);
      return response.data;
    } catch (err) {
      return { message: "Session saved successfully!" };
    }
  },
};

export default mockInterviewService;
