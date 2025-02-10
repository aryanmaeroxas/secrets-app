import { Pokemon } from "../hooks/usePokemons";
import { Card, Image } from "@chakra-ui/react";

interface Props {
  pokemon: Pokemon;
}

function getPokemonId(url: string) {
  return url.split("/").filter(Boolean).pop();
}

const PokemonCard = ({ pokemon }: Props) => {
  return (
    <Card.Root size="lg" width="320px" variant="elevated" key={pokemon.name}>
      <Card.Body gap="2">
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${getPokemonId(
            pokemon.url
          )}.png`}
        />
        <Card.Title>{pokemon.name}</Card.Title>
      </Card.Body>
    </Card.Root>
  );
};

export default PokemonCard;
