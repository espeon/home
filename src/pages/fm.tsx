import {
  Flex,
  FlexProps,
  Box,
  Text,
  Image,
  SlideFade,
  Center,
} from "@chakra-ui/react";
import useSWR from "swr";
import { useRouter } from "next/router";
import { IoMdPause, IoMdPlay } from "react-icons/io";
import { useEffect, useState } from "react";
import { replace } from "lodash";

function fetcher(url) {
  return fetch(url).then((r) => r.json());
}

// don't worry, this isn't supposed to be secret!
const FM_KEY = "6f5ff9d828991a85bd78449a85548586";

const isServer = () => typeof window === `undefined`;

export const LastFmCard = ({ query }) => {
  if (typeof window === "undefined") return null;
  let [url, setUrl] = useState({
    load: false,
    url: query.user
      ? `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${query.user}&api_key=${FM_KEY}&length=1&format=json`
      : `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=kanb&api_key=${FM_KEY}&length=1&format=json`,
  });
  const user = query.user;

  useEffect(() => {
    console.log("loaded");
    if (!query.user && !url.load) {
      console.log("set to balls")
      setUrl((url) => ({
        load: true,
        url: `https://92dcf4e8-4bd6-4a9e-a84b-9dd3987a599a.id.repl.co/api/fm/`,
      }));
    }
  }, []);

  console.log(url.load, user, url.url);

  const { data, error } = useSWR(url.url, fetcher, {
    refreshInterval: 25000,
  });
  if (error) return null;

  if (data == undefined) return null;

  if (data.error)
    return (
      <Center height="99vh">
        <Flex direction="column">
          <Center>
            <Image
              src="https://www.last.fm/static/images/marvin.05ccf89325af.png"
              maxW="10vw"
              mr={10}
            />
          </Center>
          <Text fontSize="3xl">last.fm user not found.</Text>
        </Flex>
      </Center>
    );

  const artist = data && data.recenttracks.track[0].artist["#text"];
  const album = data && data.recenttracks.track[0].album["#text"];
  let musictitle = data && data.recenttracks.track[0].name;
  let bk_cover = data && data.recenttracks.track[0].image[1]["#text"];
  let cover =
    data &&
    data.recenttracks.track[0].image[
      data.recenttracks.track[0].image.length - 1
    ]["#text"].replace("300x300", "3000x0");

  return (
    <Center height="99vh">
      <SlideFade in={data}>
        <Flex>
          <Box alignContent="center" position="relative">
          <Flex
              position="absolute"
              mt="2"
              h="10"
              w="14"
              borderEndRadius="lg"
              opacity="0.8"
              justifyContent="center"
              alignItems="center"
              boxShadow="dark-lg"
            >
            {data.recenttracks.track[0]["@attr"] &&
            data.recenttracks.track[0]["@attr"].nowplaying == "true" ? (
              <IoMdPlay fontSize="1.5rem" />
            ) : (
              <IoMdPause fontSize="1.5rem" />
            )}
            </Flex>
            <Image
              minH="64"
              h="40vh"
              minW="40vh"
              borderRadius="lg"
              boxShadow="dark-lg"
              src={cover}
              fallbackSrc={bk_cover}
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

LastFmCard.getInitialProps = ({ query }) => {
  return { query };
};
export default LastFmCard;
