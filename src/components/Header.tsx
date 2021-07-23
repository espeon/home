import {
  Flex,
  FlexProps,
  Spacer,
  Text,
  Box,
  Link as CLink,
} from "@chakra-ui/react";
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
        <CLink mr="12">cv</CLink>
      </Box>
      <Spacer />
      <DarkModeSwitch />
    </Flex>
  </Box>
);
export default Header;
