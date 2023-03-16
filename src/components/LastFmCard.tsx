import {
  Flex,
  useColorModeValue,
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
import { useEffect, useState, useRef, createRef } from "react";


function fetcher(url) {
  return fetch(url).then((r) => r.json());
}

const FM_KEY = "6f5ff9d828991a85bd78449a85548586";
const MAIN = "kanb";

export const LastFmCard = (props) => {
  let [scroll, setScroll] = useState({scroll: 0});

  const onScroll = () => {
    const scrollY = window.scrollY //Don't get confused by what's scrolling - It's not the window
    console.log(`onScroll, window.scrollY: ${scrollY} myRef.scrollTop: ${scroll}`)
    setScroll({
      scroll: scrollY
    })
  }

  const { data, error } = useSWR(
    `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${MAIN}&api_key=${FM_KEY}&limit=1&format=json`,
    fetcher,
    {refreshInterval: 5000,}
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
    <SlideFade in={data && (props.shown??true)}>
      <Box
        w={{ base: "85vw", lg: "auto" }}
        h="24"
        bg={useColorModeValue("gray.200", "gray.800")}
        borderRadius="xl"
        boxShadow="lg"
        onScroll = {() => console.log(window.scrollY)}
      >
        <Flex>
          <Box alignContent="center">
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
            <Text mx="4" mt="1" w={{ base: "56vw", lg: "72" }} noOfLines={1}>
              {musictitle}
            </Text>
            <Text mx="4" mt="1" w={{ base: "56vw", lg: "72" }} noOfLines={1}>
              {artist}
            </Text>
            <Text mx="4" mt="1" w={{ base: "56vw", lg: "72" }} noOfLines={1}>
              {album}
            </Text>
          </Flex>
        </Flex>
      </Box>
    </SlideFade>
  );
};
export default LastFmCard;
