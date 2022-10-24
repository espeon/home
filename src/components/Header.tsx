import { ChevronDownIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Flex,
  Text,
  Spacer,
  Box,
  Link as CLink,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Link,
  Button,
  background,
} from "@chakra-ui/react";
import { FaChevronCircleDown } from "react-icons/fa";
import { DarkModeSwitch } from "./DarkModeSwitch";

export const Header = () => (
  <Box h="100%" w="100%">
    <Flex
      direction="row"
      alignItems="center"
      justifyContent="center"
      h="100%"
      w="100%"
    >
      <Box>
        <CLink mr="12">home</CLink> <CLink mr="12">blog</CLink>{" "}
      </Box>
      <Spacer />
      <DarkModeSwitch />
    </Flex>
  </Box>
);
export default Header;
