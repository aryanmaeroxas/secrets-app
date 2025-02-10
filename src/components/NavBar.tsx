import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/browser.png";

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="60px" padding="2"></Image>
      <Text>NavBar</Text>
    </HStack>
  );
};

export default NavBar;
