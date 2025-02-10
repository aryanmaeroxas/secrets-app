import { usePokemonsInfo } from "@/hooks/usePokemons";
import { DataList, Stack, Text } from "@chakra-ui/react";

interface Props {
  name: string;
}

const PokemonInfo = ({ name }: Props) => {
  const { data, error } = usePokemonsInfo(name);

  const pokemonInfo = [
    { label: "Base Experience", value: data?.base_experience },
    { label: "Height", value: data?.height },
    { label: "Weight", value: data?.weight },
  ];

  return (
    <>
      {error && <Text>{error}</Text>}
      <Stack gap="1">
        <DataList.Root size="sm" orientation="horizontal">
          {pokemonInfo.map((info) => (
            <DataList.Item key={info.label}>
              <DataList.ItemLabel>{info.label}</DataList.ItemLabel>
              <DataList.ItemValue>{info.value}</DataList.ItemValue>
            </DataList.Item>
          ))}
        </DataList.Root>
      </Stack>
    </>
  );
};

export default PokemonInfo;
