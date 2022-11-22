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
  Center,
  Button,
} from "@chakra-ui/react";
import { FaLastfm } from "react-icons/fa";
import useSWR from "swr";
import Link from "next/link";
import { IoMdPlay, IoMdPause } from "react-icons/io";
import { useState } from "react";

function fetcher(url) {
  return fetch(url).then((r) => r.json());
}

export const LastFmCard = (props: FlexProps) => {
  let [dumb, setDumb] = useState({ count: 0, data: [] });
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
  let bk_cover = data && data.recenttracks.track[0].image[1]["#text"];
  let cover =
    data &&
    data.recenttracks.track[0].image[
      data.recenttracks.track[0].image.length - 1
    ]["#text"];

  return (
    <Center height="99vh">
      <SlideFade in={data}>
        <Flex>
          <Box alignContent="center" position="relative">
            <Image
              minH="64"
              h="40vh"
              minW="40vh"
              borderRadius="lg"
              boxShadow="dark-lg"
              src={cover}
              fallback={bk_cover}
            />
          </Box>
          <Flex
            justifyContent="center"
            alignItems="start"
            direction="column"
            ml="12"
          >
            <Text
              fontSize="3xl"
              mx="0"
              mt="1"
              w={{ base: "56vw", lg: "35vw" }}
              isTruncated
            >
              {musictitle}
            </Text>
            <Text
              fontSize="3xl"
              mx="0"
              mt="1"
              w={{ base: "56vw", lg: "35vw" }}
              isTruncated
            >
              {artist}
            </Text>
            <Text
              fontSize="3xl"
              mx="0"
              mt="1"
              w={{ base: "56vw", lg: "35vw" }}
              isTruncated
            >
              {album}
            </Text>
          </Flex>
        </Flex>
      </SlideFade>
    </Center>
  );
};
export default LastFmCard;
