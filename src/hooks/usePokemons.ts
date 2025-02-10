import useData from "./useData";

export interface Pokemon {
  name: string;
  url: string;
}
const usePokemons = () =>
  useData<Pokemon>("https://pokeapi.co/api/v2", "/pokemon");

export default usePokemons;
