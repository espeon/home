import { Flex, useColorModeValue, FlexProps, Box, Text, Heading } from '@chakra-ui/react'

export const ProjectCard = ({ title, subtitle }: { title: string, subtitle:string }) => {
  return (
      <Box w={{ base: "85vw", lg: "40vw", xxl: "600px" }} h="7em" bg={useColorModeValue("gray.200", "gray.800")} borderRadius="lg" my="4" boxShadow="lg">
          <Heading fontSize="2xl" fontWeight="medium" px="4" pt="4" flexWrap="wrap">{title}</Heading>
          <Text px="4" pt="1">{subtitle}</Text>
      </Box>
  )
}

ProjectCard.defaultProps = {
    title: 'Title',
    subtitle: 'this description sucks!!!'
  }

export default ProjectCard;