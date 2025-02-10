import React, { useEffect, useState } from "react";
import { CanceledError } from "axios";
import pokemonApi from "@/services/pokemon-api";

export interface Pokemon {
  name: string;
  url: string;
}

interface FetchPokemonsResponse {
  count: number;
  results: Pokemon[];
}

const usePokemons = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    pokemonApi
      .get<FetchPokemonsResponse>("/pokemon", { signal: controller.signal })
      .then((res) => {
        setPokemons(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });
    return () => controller.abort();
  }, []);
  return { pokemons, error, isLoading };
};

export default usePokemons;
