import {
  Center,
  Flex,
  Heading,
  Box,
  Text,
  Image,
} from "@chakra-ui/react";
import { Container } from "../components/Container";
import ProjectCard from "../components/ProjectCard";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import IconRow from "../components/IconRow";

const Index = () => (
  <>
    <Container minHeight={{ base: "100vh", lg: "100vh"}} height={{ base: "auto", lg: "100vh"}} width="100%">
      <Box h="10%" w="85%" pt={{ base: "4", lg: "0"}}>
        <Header />
      </Box>
      <Center height={{ base: "100%", lg: "78%"}} w="85%" maxHeight="100%">
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
              src="https://pcdn.piiojs.com/i/tkkjic/wp,1,bhc,1,vw,256,vh,256/https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F22222885%3Fv%3D6"
            />
            <Heading w="fit-content" h="25%" size="2xl" mb="2" fontWeight="medium">
              hey,👋🏼 i'm natalie!
            </Heading>
            <Heading fontWeight={"medium"} size="md" mb="2">i do cool internet things with computers.<br/> find me here:</Heading>
            <IconRow />
          </Box>
        </Flex>
      </Center>
      <Box height={{ base: "max", lg: "11%"}} minW="85%" maxHeight="100%" mt={{ base: "24", lg: "0"}} mb={{ base: "6", lg: "0"}} alignItems="center">
        <Footer />
      </Box>
    </Container>
  </>
);

export default Index;
