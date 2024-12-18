import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/rawgg.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Link to="/">
        <Image
          borderRadius={10}
          src={logo}
          boxSize="60px"
          objectFit='fill'
        />
      </Link>

      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};
export default NavBar;
