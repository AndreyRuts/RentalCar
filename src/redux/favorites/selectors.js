export const selectFavorites = (state) => state.favorites;
export const isFavorite = (id) => (state) =>
  state.favorites.some(car => car.id === id);