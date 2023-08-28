import { ChevronDownIcon } from "@chakra-ui/icons";
import { Flex, FlexProps, Spacer, Text, Box, Link } from "@chakra-ui/react";
import { DarkModeSwitch } from "./DarkModeSwitch";
import LastFmCard from "./LastFmCard";

export const Footer = (props) => (
  <Box h="100%" w="100%">
    <Flex
      direction={{ base: "column-reverse", lg: "row" }}
      alignItems="center"
      justifyContent="center"
      h="100%"
      w="100%"
    >
      <Spacer />
      <Link href="#about">
        <ChevronDownIcon fontSize={"2xl"} />
      </Link>
      <Spacer />
    </Flex>
  </Box>
);

export default Footer;
