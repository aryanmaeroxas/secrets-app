import { Pokemon } from "../hooks/usePokemons";
import { Card, Image, Button } from "@chakra-ui/react";
import PokemonInfo from "./PokemonInfo";

interface Props {
  pokemon: Pokemon;
}

function getPokemonId(url: string) {
  return url.split("/").filter(Boolean).pop();
}

function capitalizeName(text: string) {
  return text[0].toUpperCase() + text.slice(1);
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
        <Card.Title>{capitalizeName(pokemon.name)}</Card.Title>
        <Card.Description>
          <PokemonInfo key={pokemon.name} name={pokemon.name} />
        </Card.Description>
      </Card.Body>
      <Card.Footer justifyContent="flex-end">
        <Button variant="outline">View</Button>
      </Card.Footer>
    </Card.Root>
  );
};

export default PokemonCard;
