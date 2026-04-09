import api from "./api";

export const getLocations = async () => {
    const response = await api.get(`/location`);
    return response.data;
};
