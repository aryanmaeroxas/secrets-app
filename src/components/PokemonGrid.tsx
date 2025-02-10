import usePokemons from "@/hooks/usePokemons";
import { Text, Stack } from "@chakra-ui/react";
import PokemonCard from "./PokemonCard";
import PokemonCardSkeleton from "./PokemonCardSkeleton";

const PokemonGrid = () => {
  const { data, error, isLoading } = usePokemons();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

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
        {isLoading &&
          skeletons.map((skeleton) => <PokemonCardSkeleton key={skeleton} />)}
        {data.map((data) => (
          <PokemonCard key={data.name} pokemon={data} />
        ))}
      </Stack>
    </>
  );
};

export default PokemonGrid;
