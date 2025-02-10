import axios from "axios";

export const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
});

export const getPokemon = async (nameOrId) => {
  const { data } = await api.get(`/pokemon/${nameOrId}`);
  // Get species data to access evolution chain
  const speciesData = await getPokemonSpecies(data.species.url);
  const evolutionData = await getEvolutionChain(
    speciesData.evolution_chain.url
  );

  return {
    ...data,
    species: speciesData,
    evolution_chain: evolutionData,
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

export const getPokemonSpecies = async (url) => {
  const { data } = await api.get(url.replace(api.defaults.baseURL, ""));
  return data;
};

export const getEvolutionChain = async (url) => {
  const { data } = await api.get(url.replace(api.defaults.baseURL, ""));
  return data;
};
