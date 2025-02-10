import axios from "axios";

export const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
});

export const getPokemon = async (nameOrId) => {
  const { data } = await api.get(`/pokemon/${nameOrId}`);
  return {
    ...data,
    moves: data.moves.map((move) => ({
      ...move,
      move: {
        ...move.move,
        url: `https://pokeapi.co/api/v2/move/${move.move.name}`,
      },
    })),
  };
};

export const getPokemonList = async (url) => {
  const { data } = await api.get(url.replace(api.defaults.baseURL, ""));
  return data;
};

export const getMoveDetails = async (url) => {
  const { data } = await api.get(url.replace(api.defaults.baseURL, ""));
  return data;
};

export const getAbilityDetails = async (url) => {
  const { data } = await api.get(url.replace(api.defaults.baseURL, ""));
  return data;
};
