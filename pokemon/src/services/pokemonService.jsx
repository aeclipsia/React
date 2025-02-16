export async function fetchPokemonData(offset = 0, limit = 50) {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();

    const cleanedPokemonList = await Promise.all(
      data.results.map(async (pokemon) => {
        const cleanedPokemon = await cleanPokemonData(pokemon);
        return cleanedPokemon;
      })
    );

    return cleanedPokemonList;
  } catch (error) {
    throw new Error(`Error fetching Pokémon data: ${error.message}`);
  }
}

async function cleanPokemonData(pokemon) {
  const pokemonName = capitalizeName(pokemon.name);

  const detailsResponse = await fetch(pokemon.url);
  const pokemonDetails = await detailsResponse.json();

  const cleanedName = cleanFormName(pokemonName);

  return {
    name: cleanedName,
    url: pokemon.url,
    types: pokemonDetails.types,
    species: pokemonDetails.species,
  };
}

function capitalizeName(name) {
  return name.charAt(0).toUpperCase() + name.slice(1);
}

function cleanFormName(name) {
  const alternateFormMapping = {
    "mimikyu-disguised": "mimikyu",
    "deoxys-attack": "deoxys",
    "deoxys-defense": "deoxys",
    "deoxys-speed": "deoxys",
  };
  return alternateFormMapping[name] || name;
}

function isUnwantedForm(name) {
  const unwantedForms = ["Mega", "Gigantamax", "Alola", "Galar", "Hisui"];

  return unwantedForms.some((form) => name.includes(form));
}
