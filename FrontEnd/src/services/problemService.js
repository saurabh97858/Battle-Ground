import axiosClient from './axiosClient';
import { FALLBACK_PROBLEMS, getFallbackProblem } from '../utils/fallbackData';

const problemService = {
    getAllProblems: async () => {
        try {
            const response = await axiosClient.get('/problem/getAllProblem');
            if (Array.isArray(response.data) && response.data.length > 0) {
                return response.data;
            }
            return FALLBACK_PROBLEMS;
        } catch (err) {
            return FALLBACK_PROBLEMS;
        }
    },
    getPublicProblems: async () => {
        try {
            const response = await axiosClient.get('/problem/public');
            if (Array.isArray(response.data) && response.data.length > 0) {
                return response.data;
            }
            return FALLBACK_PROBLEMS;
        } catch (err) {
            return FALLBACK_PROBLEMS;
        }
    },

    getProblemById: async (id) => {
        try {
            const response = await axiosClient.get(`/problem/problemById/${id}`);
            if (response.data && response.data.title) {
                return response.data;
            }
            return getFallbackProblem(id);
        } catch (err) {
            return getFallbackProblem(id);
        }
    },
    getPublicProblemById: async (id) => {
        try {
            const response = await axiosClient.get(`/problem/public/${id}`);
            if (response.data && response.data.title) {
                return response.data;
            }
            return getFallbackProblem(id);
        } catch (err) {
            return getFallbackProblem(id);
        }
    },

    getSolvedProblems: async () => {
        try {
            const response = await axiosClient.get('/problem/problemSolvedByUser');
            return Array.isArray(response.data) ? response.data : [];
        } catch (err) {
            return [];
        }
    },

    createProblem: async (problemData) => {
        const response = await axiosClient.post('/problem/create', problemData);
        return response.data;
    },

    updateProblem: async (id, problemData) => {
        const response = await axiosClient.put(`/problem/update/${id}`, problemData);
        return response.data;
    },

    deleteProblem: async (id) => {
        const response = await axiosClient.delete(`/problem/delete/${id}`);
        return response.data;
    },

    // Video Capabilities
    generateUploadSignature: async (problemId) => {
        const response = await axiosClient.get(`/video/create/${problemId}`);
        return response.data;
    },

    saveVideoLocalFallback: async (videoData) => {
        const response = await axiosClient.post('/video/save-local', videoData);
        return response.data;
    },

    getVideoData: async (problemId) => {
        const response = await axiosClient.get(`/video/${problemId}`);
        return response.data;
    },

    deleteVideo: async (problemId) => {
        const response = await axiosClient.delete(`/video/delete/${problemId}`);
        return response.data;
    }
};

export default problemService;
