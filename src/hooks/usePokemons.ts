import useDataArray from "./useDataArray";
import useDataSingle from "./useDataSingle";

interface BaseType {
  name: string;
}

export interface BaseInfo {
  id: number;
  base_experience: number;
  height: number;
  weight: number;
  types: { type: BaseType };
}

export interface Pokemon {
  name: string;
  url: string;
}

const usePokemons = () =>
  useDataArray<Pokemon>("https://pokeapi.co/api/v2", "/pokemon");

const usePokemonsInfo = (name: string) =>
  useDataSingle<BaseInfo>("https://pokeapi.co/api/v2/pokemon", `/${name}`);

export { usePokemonsInfo, usePokemons };
