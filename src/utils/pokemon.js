export const formatHeight = (height) => {
  const meters = height / 10;
  const feet = Math.floor(meters * 3.281);
  const inches = Math.round((meters * 3.281 - feet) * 12);
  return `${meters}m (${feet}'${inches}")`;
};

export const formatWeight = (weight) => {
  const kg = weight / 10;
  const lbs = Math.round(kg * 2.205);
  return `${kg}kg (${lbs}lbs)`;
};

export const formatPokemonName = (name) => {
  return name.charAt(0).toUpperCase() + name.slice(1);
};

export const formatStatName = (statName) => {
  return statName.replace("-", " ");
};
