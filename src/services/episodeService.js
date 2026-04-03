import api from "./api";

export const getEpisodes = async () => {
    const response = await api.get(`/episode/`);
    return response.data;
};
