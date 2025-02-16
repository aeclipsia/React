import { useEffect, useState } from "react";

export function PokemonCard({ name, url }) {
  const [pokemonDetails, setPokemonDetails] = useState(null);

  // Map of Pokémon types to corresponding colors
  const typeColors = {
    grass: "#78C850",
    poison: "#A040A0",
    fire: "#F08030",
    water: "#6890F0",
    electric: "#F8D030",
    ice: "#98D8D8",
    fighting: "#C03028",
    ground: "#E0C068",
    flying: "#A890F0",
    psychic: "#F85888",
    bug: "#A8B820",
    rock: "#B8A038",
    ghost: "#705898",
    dark: "#705848",
    dragon: "#7038F8",
    steel: "#B8B8D0",
    fairy: "#EE99AC",
    normal: "#A8A878",
  };

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setPokemonDetails(data));
  }, [url]);

  if (!pokemonDetails) {
    return <div>Loading...</div>;
  }

  // Extract type colors for the Pokémon
  const typeColorArray = pokemonDetails.types.map(
    (typeInfo) => typeColors[typeInfo.type.name]
  );

  // Create background style
  const backgroundStyle =
    typeColorArray.length === 1
      ? typeColorArray[0] // Single type: solid color
      : `linear-gradient(135deg, ${typeColorArray.join(", ")})`; // Dual types: gradient

  return (
    <div
      style={{
        background: backgroundStyle,
        borderRadius: "10px",
        padding: "16px",
        color: "#fff",
        textAlign: "center",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        marginBottom: "16px",
      }}
    >
      <div>
        <img src={pokemonDetails.sprites.front_default} alt={name} />
      </div>
      <div>
        <h3>{pokemonDetails.name}</h3>
        <p>Height: {pokemonDetails.height / 10} m</p>
        <p>Weight: {pokemonDetails.weight / 10} kg</p>
        <div>
          {pokemonDetails.types.map((typeInfo) => (
            <p key={typeInfo.slot}>{typeInfo.type.name}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
