import {
  Flex,
  useColorModeValue,
  FlexProps,
  Box,
  Text,
  Heading,
  Image,
  Spacer,
  SlideFade,
} from "@chakra-ui/react";
import { FaLastfm } from "react-icons/fa";
import useSWR from "swr";
import Link from "next/link";
import { IoMdPlay, IoMdPause } from "react-icons/io";

function fetcher(url) {
  return fetch(url).then((r) => r.json());
}

export const LastFmCard = (props: FlexProps) => {
  const { data, error } = useSWR(
    `https://92dcf4e8-4bd6-4a9e-a84b-9dd3987a599a.id.repl.co/api/fm/`,
    fetcher,
    {
      refreshInterval: 25000,
    }
  );
  if (error) return null;

  if (data == undefined) return null;

  const artist = data && data.recenttracks.track[0].artist["#text"];
  const album = data && data.recenttracks.track[0].album["#text"];
  let musictitle = data && data.recenttracks.track[0].name;
  let cover =
    data &&
    data.recenttracks.track[0].image[
      data.recenttracks.track[0].image.length - 1
    ]["#text"];

  return (
    <SlideFade in={data}>
      <Box
        w={{ base: "85vw", lg: "auto" }}
        h="24"
        bg={useColorModeValue("gray.200", "gray.800")}
        borderRadius="xl"
        boxShadow="lg"
      >
        <Flex>
          <Box alignContent="center" position="relative">
            <Flex
              bg="gray.700"
              position="absolute"
              mt="2"
              h="7"
              w="14"
              borderEndRadius="lg"
              opacity="0.8"
              justifyContent="center"
              alignItems="center"
            >
              <Box mr="1">
                <Link href="https://last.fm/user/kanb">

                  <FaLastfm fontSize="1.25rem" color="red" />

                </Link>
              </Box>
              {data.recenttracks.track[0]["@attr"] &&
              data.recenttracks.track[0]["@attr"].nowplaying == "true" ? (
                <IoMdPlay fontSize="1rem" />
              ) : (
                <IoMdPause fontSize="1rem" />
              )}
            </Flex>
            <Image
              minH="24"
              h="24"
              minW="24"
              borderRadius="lg"
              boxShadow="lg"
              src={`https://pcdn.piiojs.com/i/demo/wp,1,bhc,1,vw,360,vh,360/${encodeURIComponent(
                cover
              )}`}
            />
          </Box>
          <Flex justifyContent="center" alignItems="start" direction="column">
            <Text mx="4" mt="1" w={{ base: "56vw", lg: "72" }} isTruncated>
              {musictitle}
            </Text>
            <Text mx="4" mt="1" w={{ base: "56vw", lg: "72" }} isTruncated>
              {artist}
            </Text>
            <Text mx="4" mt="1" w={{ base: "56vw", lg: "72" }} isTruncated>
              {album}
            </Text>
          </Flex>
        </Flex>
      </Box>
    </SlideFade>
  );
};
export default LastFmCard;
