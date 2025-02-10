import usePokemons from "@/hooks/usePokemons";
import { Text, Stack } from "@chakra-ui/react";
import PokemonCard from "./PokemonCard";

const PokemonGrid = () => {
  const { pokemons, error } = usePokemons();

  return (
    <>
      {error && <Text>{error}</Text>}
      <Stack
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        gap="5"
        direction="row"
        wrap="wrap"
        justifyContent="space-evenly"
      >
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.name} pokemon={pokemon} />
        ))}
      </Stack>
    </>
  );
};

export default PokemonGrid;
