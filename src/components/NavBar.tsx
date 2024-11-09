import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/rawgg.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";


const NavBar = () => {
  return (
    <HStack padding="10px">
      <Image borderRadius={20}  src={logo} boxSize="60px" />
      <SearchInput  />
      <ColorModeSwitch />
    </HStack>
  );
};
export default NavBar;
