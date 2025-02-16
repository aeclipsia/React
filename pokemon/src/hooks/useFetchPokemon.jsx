import { useState, useCallback } from "react";
import { fetchPokemonData } from "../services/pokemonService";

export function useFetchPokemon() {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [offset, setOffset] = useState(0); // Tracks the current offset
  const [hasMore, setHasMore] = useState(true); // Whether there is more data to load

  const loadMorePokemon = useCallback(async () => {
    if (loading || !hasMore) return; // Prevent multiple simultaneous loads

    setLoading(true);
    setError(null);

    try {
      const newPokemon = await fetchPokemonData(offset); // Fetch data with the current offset
      if (newPokemon.length === 0) {
        setHasMore(false); // No more Pokémon to fetch
      } else {
        setPokemonList((prevList) => [...prevList, ...newPokemon]); // Append new data
        setOffset((prevOffset) => prevOffset + 50); // Increment offset for the next batch
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [offset, hasMore, loading]);

  // Load the initial batch only once
  const loadInitialPokemon = useCallback(async () => {
    if (pokemonList.length === 0) {
      await loadMorePokemon(); // Ensure only one initial load
    }
  }, [loadMorePokemon, pokemonList.length]);

  return {
    pokemonList,
    loading,
    error,
    loadMorePokemon,
    loadInitialPokemon,
    hasMore,
  };
}
