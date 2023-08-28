import {
  Center,
  Flex,
  Heading,
  Box,
  Text,
  Image,
  Divider,
} from "@chakra-ui/react";
import { Container } from "../components/Container";
import ProjectCard from "../components/ProjectCard";
import { Header } from "../components/Header";
import HomeFooter from "../components/HomeFooter";
import Footer from "../components/Footer";
import IconRow from "../components/IconRow";
import { useRef } from "react";

const Index = () => {
  return (
    <>
      <Container
        minHeight={{ base: "100vh", lg: "100vh" }}
        height={{ base: "auto", lg: "100vh" }}
        width="100%"
      >
        <Box h="10%" w="85%" pt={{ base: "4", lg: "0" }}>
          <Header />
        </Box>
        <Center height={{ base: "100%", lg: "78%" }} w="85%" maxHeight="100%">
          <Flex direction={{ base: "column", lg: "row" }}>
            <Box
              w={{ base: "85vw", lg: "40vw", xxl: "800px" }}
              minW={{ base: "95%", lg: "50%" }}
              h={{ base: "100%", lg: "10%" }}
              textAlign="left"
            >
              <Image
                boxSize="180"
                borderRadius="full"
                mb="4"
                mt={{ base: "8", lg: "0" }}
                //TODO: make image cdn
                src="https://pcdn.nat.vg/crop?width=256&height=256&url=https://avatars.githubusercontent.com/u/22222885"
              />
              <Heading
                w="fit-content"
                h="25%"
                size="2xl"
                mb="2"
                fontWeight="medium"
              >
                hey,👋🏼 i'm{" "}
                <Text
                  as="span"
                  background="linear-gradient(115deg, #A73DC4, #FF5CCC)"
                  backgroundClip="text"
                >
                  natalie
                </Text>
                !
              </Heading>
              <Text fontWeight={"medium"} fontSize="xl">
                i do cool internet things with computers.
                <br /> find me here:
              </Text>
              <IconRow />
            </Box>
          </Flex>
        </Center>
        <Box
          height={{ base: "max", lg: "11%" }}
          minW="85%"
          maxHeight="100%"
          mt={{ base: "24", lg: "0" }}
          mb={{ base: "6", lg: "0" }}
          alignItems="center"
        >
          <HomeFooter />
        </Box>
      </Container>
      <Container
        minHeight={{ base: "100vh", lg: "100vh" }}
        height={{ base: "auto", lg: "100vh" }}
        width="100%"
      >
        <Center
          height={{ base: "100%", lg: "88%" }}
          w="85%"
          maxHeight="100%"
          id="about"
        >
          <Flex direction={{ base: "column", lg: "row" }}>
            <Box
              w={{ base: "85vw", lg: "40vw", xxl: "800px" }}
              minW={{ base: "95%", lg: "50%" }}
              h={{ base: "100%", lg: "10%" }}
              textAlign="left"
            >
              <Heading
                w="fit-content"
                h="25%"
                size="2xl"
                mb="2"
                fontWeight="medium"
              >
                about me
                <Divider mt="-1" />
              </Heading>
              <Text fontWeight={"large"} fontSize="xl" mb="2">
                <Text
                  as="span"
                  background="linear-gradient(115deg, #FF5CCC, #37ADF4)"
                  backgroundClip="text"
                  mb="2"
                >
                  Hello! I'm Natalie,
                </Text>{" "}
                and this is my place on the internet. I like to call myself a
                developer. I've been making things from websites to CLI tools
                since 14, and I'd also like to make cool things for a living.
                I'm also currently a college student getting a Bachelor's of
                Science degree in Computer Science.
                <br />
                <br />
                Besides that, I'm a pretty big fan of music (I also make some as
                a hobby) and I also like to longboard when I have the time.
              </Text>
            </Box>
          </Flex>
        </Center>
        <Box
          height={{ base: "max", lg: "11%" }}
          minW="85%"
          maxHeight="100%"
          mt={{ base: "24", lg: "0" }}
          mb={{ base: "6", lg: "0" }}
          alignItems="center"
        >
          <Footer />
        </Box>
      </Container>
    </>
  );
};

export default Index;
