import axiosClient from './axiosClient';
import { FALLBACK_ARENA_ROOM } from '../utils/fallbackData';

const matchService = {
    createMatch: async (data) => {
        try {
            const response = await axiosClient.post('/api/match/create', data);
            return response.data;
        } catch (err) {
            return {
                ...FALLBACK_ARENA_ROOM,
                matchId: "BG-ARENA-" + Math.floor(1000 + Math.random() * 9000),
                type: data?.type || 'Custom',
                status: 'Waiting',
                players: [{ _id: "local-user", firstName: "You", rating: 1200 }]
            };
        }
    },

    joinMatch: async (matchId) => {
        try {
            const response = await axiosClient.post('/api/match/join', { matchId });
            return response.data;
        } catch (err) {
            return {
                ...FALLBACK_ARENA_ROOM,
                matchId: matchId || "BG-ARENA-9999",
                status: 'Ongoing'
            };
        }
    },

    getMatch: async (matchId) => {
        try {
            const response = await axiosClient.get(`/api/match/${matchId}`);
            return response.data;
        } catch (err) {
            return {
                ...FALLBACK_ARENA_ROOM,
                matchId: matchId || "BG-ARENA-9999",
                status: 'Waiting'
            };
        }
    },

    queueMatch: async (rating) => {
        try {
            const response = await axiosClient.post('/api/match/queue', { rating });
            return response.data;
        } catch (err) {
            return { status: 'queued', message: 'Entered match queue' };
        }
    },
    getQueueStatus: async () => {
        try {
            const response = await axiosClient.get('/api/match/queue-status');
            return response.data;
        } catch (err) {
            return { status: 'idle' };
        }
    },
    cancelQueue: async () => {
        try {
            const response = await axiosClient.post('/api/match/cancel-queue');
            return response.data;
        } catch (err) {
            return { status: 'cancelled' };
        }
    },
    submitFinal: async (matchId) => {
        const response = await axiosClient.post(`/api/match/${matchId}/submit-final`);
        return response.data;
    },
    forfeitMatch: async (matchId) => {
        const response = await axiosClient.post(`/api/match/${matchId}/forfeit`);
        return response.data;
    },
    finishMatch: async (matchId) => {
        const response = await axiosClient.post(`/api/match/${matchId}/finish`);
        return response.data;
    },

    uploadProfilePicture: async (formData) => {
        const response = await axiosClient.post('/api/user/profile-picture', formData, {
            headers: { 'Content-Type': 'multipart/form-data' }
        });
        return response.data;
    },

    getUserProfile: async (userId) => {
        const response = await axiosClient.get(`/api/user/profile/${userId}`);
        return response.data;
    }
};

export default matchService;
