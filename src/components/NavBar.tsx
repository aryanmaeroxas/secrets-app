import { HStack, Image } from "@chakra-ui/react";
import { ColorModeButton, useColorMode } from "./ui/color-mode";
import logo from "../assets/browser.png";

const NavBar = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <HStack justifyContent="space-between">
      <Image src={logo} boxSize="60px" padding="2"></Image>
      <ColorModeButton onClick={toggleColorMode} />
    </HStack>
  );
};

export default NavBar;
