import { PokemonCard } from "./PokemonCard";
import { useFetchPokemon } from "../hooks/useFetchPokemon";
import "../styles/Pokedex.css";
import { useEffect } from "react";

export function Pokedex() {
  const {
    pokemonList,
    loading,
    error,
    loadMorePokemon,
    loadInitialPokemon,
    hasMore,
  } = useFetchPokemon();

  // Load the initial batch on component mount
  useEffect(() => {
    loadInitialPokemon(); // Fetch the first 50 Pokémon
  }, [loadInitialPokemon]);

  // Infinite scrolling logic
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
          document.documentElement.offsetHeight - 200 &&
        hasMore &&
        !loading
      ) {
        loadMorePokemon();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loadMorePokemon, hasMore, loading]);

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="pokedex">
      <div className="pokedex-grid">
        {pokemonList.map((pokemon) => (
          <PokemonCard
            key={pokemon.name}
            name={pokemon.name}
            url={pokemon.url}
          />
        ))}
      </div>
      {loading && <div className="loading">Loading more Pokémon...</div>}
    </div>
  );
}
