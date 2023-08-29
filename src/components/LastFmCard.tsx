import {
  Flex,
  useColorModeValue,
  Box,
  Text,
  Heading,
  Image,
  Spacer,
  SlideFade,
  SkeletonCircle,
  Skeleton,
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
  let [scroll, setScroll] = useState({ scroll: 0 });

  const onScroll = () => {
    const scrollY = window.scrollY; //Don't get confused by what's scrolling - It's not the window
    console.log(
      `onScroll, window.scrollY: ${scrollY} myRef.scrollTop: ${scroll}`
    );
    setScroll({
      scroll: scrollY,
    });
  };

  const { data, error } = useSWR(
    `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${MAIN}&api_key=${FM_KEY}&limit=1&format=json`,
    fetcher,
    { refreshInterval: 5000 }
  );

  let artist;
  let album;
  let musictitle;
  let cover;
  if (!(error || data == undefined)) {
    artist = data && data.recenttracks.track[0].artist["#text"];
    album = data && data.recenttracks.track[0].album["#text"];
    musictitle = data && data.recenttracks.track[0].name;
    cover =
      data &&
      data.recenttracks.track[0].image[
        data.recenttracks.track[0].image.length - 1
      ]["#text"];
  }

  return (
    <Box
      w={{ base: "85vw", lg: "auto" }}
      h="24"
      bg={useColorModeValue("gray.200", "gray.800")}
      borderRadius="xl"
      boxShadow="lg"
      onScroll={() => console.log(window.scrollY)}
    >
      <Flex>
        <Box alignContent="center">
          <SkeletonCircle
            startColor="gray.500"
            endColor="gray.700"
            minH="24"
            h="24"
            minW="24"
            borderRadius="lg"
            boxShadow="lg"
            isLoaded={!(error || data == undefined)}
          >
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
              {!(error || data == undefined) ? (
                <Box mr="1">
                  <Link href="https://last.fm/user/kanb">
                    <FaLastfm fontSize="1.25rem" color="red" />
                  </Link>
                </Box>
              ) : (
                ""
              )}
              {!(error || data == undefined) &&
              data.recenttracks.track[0]["@attr"] &&
              data.recenttracks.track[0]["@attr"].nowplaying == "true" ? (
                <IoMdPlay fontSize="1rem" />
              ) : error || data == undefined ? (
                ""
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
              src={`https://pcdn.nat.vg/crop?width=256&height=256&url=${encodeURIComponent(
                cover
              )}`}
            />
          </SkeletonCircle>
        </Box>
        <Flex justifyContent="center" alignItems="start" direction="column" pl="4">
          <Skeleton
            rounded={"3xl"}
            mb="1"
            startColor="gray.500"
            endColor="gray.700"
            isLoaded={!(error || data == undefined)}
          >
            <Text
              w={{ base: "56vw", lg: "72" }}
              noOfLines={1}
            >
              {musictitle}
            </Text>
          </Skeleton>
          <Skeleton
            rounded={"3xl"}
            mb="1"
            startColor="gray.500"
            endColor="gray.700"
            isLoaded={!(error || data == undefined)}
          >
            <Text
              w={{ base: "56vw", lg: "72" }}
              noOfLines={1}
            >
              {artist}
            </Text>
          </Skeleton>
          <Skeleton
            rounded={"3xl"}
            startColor="gray.500"
            endColor="gray.700"
            isLoaded={!(error || data == undefined)}
          >
            <Text
              w={{ base: "56vw", lg: "72" }}
              noOfLines={1}
            >
              {album}
            </Text>
          </Skeleton>
        </Flex>
      </Flex>
    </Box>
  );
};
export default LastFmCard;

const frame = (
  <Box
    w={{ base: "85vw", lg: "auto" }}
    h="24"
    bg={"gray.800"}
    borderRadius="xl"
    boxShadow="lg"
    onScroll={() => console.log(window.scrollY)}
  >
    <Flex>
      <Box alignContent="center">
        <SkeletonCircle
          startColor="gray.500"
          endColor="gray.700"
          minH="24"
          h="24"
          minW="24"
          borderRadius="lg"
          boxShadow="lg"
        />
      </Box>
      <Flex justifyContent="center" alignItems="start" direction="column">
        <Skeleton
          mx="4"
          my="1"
          rounded={"3xl"}
          startColor="gray.500"
          endColor="gray.700"
        >
          <Text
            px="2"
            w={{ base: "56vw", lg: "72" }}
            fontSize={14}
            noOfLines={1}
          >
            Chinese Satellite
          </Text>
        </Skeleton>
        <Skeleton
          mx="4"
          my="1"
          rounded={"3xl"}
          startColor="gray.500"
          endColor="gray.700"
        >
          <Text
            px="2"
            w={{ base: "56vw", lg: "72" }}
            fontSize={14}
            noOfLines={1}
          >
            Phoebe Bridgers
          </Text>
        </Skeleton>
        <Skeleton
          mx="4"
          my="1"
          rounded={"3xl"}
          startColor="gray.500"
          endColor="gray.700"
        >
          <Text
            px="2"
            w={{ base: "56vw", lg: "72" }}
            fontSize={14}
            noOfLines={1}
          >
            Punisher
          </Text>
        </Skeleton>
      </Flex>
    </Flex>
  </Box>
);
