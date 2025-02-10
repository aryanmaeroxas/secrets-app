import { Grid, GridItem, Stack, Text } from "@chakra-ui/react";
import { useColorModeValue } from "@/components/ui/color-mode";
import NavBar from "./NavBar";

const Layout = () => {
  const bg = useColorModeValue("white", "gray.800");
  const color = useColorModeValue("gray.800", "white");

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`, //1024
      }}
      bg={bg}
      color={color}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Stack hideBelow="lg">
        <GridItem area="aside">
          <Text>Aside</Text>
        </GridItem>
      </Stack>
      <GridItem area="main">
        <Text>Main</Text>
      </GridItem>
    </Grid>
  );
};

export default Layout;
