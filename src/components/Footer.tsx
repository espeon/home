import { Flex, FlexProps, Spacer, Text, Box } from "@chakra-ui/react";
import { DarkModeSwitch } from "./DarkModeSwitch";
import LastFmCard from "./LastFmCard";

export const Footer = () => (
  <Box h="100%" w="100%">
    <Flex direction={{ base: "column-reverse", lg: "row" }} alignItems="center" justifyContent="center" h="100%" w="100%">
      <Text mt={{ base: "4", lg: "0"}} mb={{ base: "4", lg: "0"}}>(c) $currentYear miwa</Text><Spacer />
      <LastFmCard />
      
    </Flex>
  </Box>
);

export default Footer;
