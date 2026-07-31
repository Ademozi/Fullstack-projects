import api from "./api";

export const getFavorites = async () => {
    const response = await api.get("/favorites");
    return response.data;
};

export const addFavorite = async (favoriteData) => {
    const response = await api.post("/favorites", favoriteData);
    return response.data;
};

export const deleteFavorite = async (id) => {
    const response = await api.delete(`/favorites/${id}`);
    return response.data;
};
