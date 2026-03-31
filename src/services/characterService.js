import api from "./api";

export const getCharacters = async (page = 1) => {
    try {
        const response = await api.get(`/character/?page=${page}`);
        return response.data;
    } catch (error) {
        console.error("Erro na chamada da API:", error.message);
        throw error;
    }
};
