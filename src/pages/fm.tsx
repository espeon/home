import { Flex, Box, Text, Image, SlideFade, Center, SkeletonText, SkeletonCircle, Skeleton as ChakraSkeleton } from "@chakra-ui/react";
import useSWR from "swr";
import { useRouter } from "next/router";
import { IoMdPause, IoMdPlay } from "react-icons/io";
import { useEffect, useState, useRef } from "react";

const fetcher = (url) => fetch(url).then((r) => r.json());

// don't worry, this isn't supposed to be secret!
const FM_KEY = "6f5ff9d828991a85bd78449a85548586";
const MAIN = "kanb";

export const LastFmCard = () => {

  let router = useRouter();
  let query = router.query;
  let [url, setUrl] = useState({
    user: null,
    url: null,
  });

  let [errCode, setErrCode] = useState(0)

  useEffect(() => {
    console.log("loaded");
    setUrl((url) => ({
      user: query.user,
      url: query.user
        ? `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${query.user}&api_key=${FM_KEY}&limit=1&format=json`
        : `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${MAIN}&api_key=${FM_KEY}&limit=1&format=json`,
    }));
  }, [router.isReady]);

  console.log(url.user, url.url);

  const fm_url = () => {
    return url.url
  }

  // SWR is a useEffect based api refreshing module
  const { data, error, isValidating } = useSWR(fm_url(), fetcher, {
    refreshInterval: 25000,
  });

  if (data == undefined && error == undefined) return Skeleton()
  
  console.log("error", error, "| data:", data);

  // We just give a generic-ish error for these
  if (error) setErrCode(-666);

  if(data?.error) setErrCode(data?.error);

  if (errCode != 0){
    let err
    // this should probably be done somewhere else, but I want something custom
    // just for this page
    switch (errCode) {
      case -666:
        err = "nothing was returned from the last.fm api.\nit might be down right now?"
        break;
      case 6:
        err = "last.fm user not found"
        break;
    
      default:
        err = `an error happened. (code ${data.error})`
        break;
    }
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
          <Text fontSize="3xl">{err}</Text>
        </Flex>
      </Center>
    );
  }

  // get data that we show
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
        <Flex direction={{base: "column", lg:"row"}}>
          <Box alignContent="center" position="relative">
            <Flex
              position="absolute"
              mt="2"
              h="10"
              w="14"
              justifyContent="center"
              alignItems="center"
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
              maxH="40vh"
              h="40vh"
              minW="40vh"
              maxW="40vw"
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
            ml={{base:"0", lg:"12"}}
            mt={{base:"12", lg:"0"}}
          >
            <Text fontSize="3xl" mx="0" mt="1" w={{ base: "56vw", lg: "35vw" }}>
              {musictitle}
            </Text>
            <Text fontSize="3xl" mx="0" mt="1" w={{ base: "56vw", lg: "35vw" }}>
              {artist}
            </Text>
            <Text fontSize="3xl" mx="0" mt="1" w={{ base: "56vw", lg: "35vw" }}>
              {album}
            </Text>
          </Flex>
        </Flex>
    </Center>
  );
};
export default LastFmCard;


const Skeleton = () => {
  return (
    <Center height="99vh">
        <Flex direction={{base: "column", lg:"row"}}>
          <Box alignContent="center" position="relative">
            <Flex
              position="absolute"
              mt="2"
              h="10"
              w="14"
              justifyContent="center"
              alignItems="center"
            >
            </Flex>
            <SkeletonCircle
              h="40vh"
              w="40vh"
              borderRadius="lg"
              boxShadow="dark-lg"
            />
          </Box>
          <Flex
            justifyContent="center"
            alignItems="start"
            direction="column"
            ml={{base:"0", lg:"12"}}
            mt={{base:"12", lg:"0"}}
          >
            <ChakraSkeleton my="2"> <Text fontSize="2xl" w={{ base: "32.4vw", lg: "16.2vw" }}>
              "The End is Near"
              </Text>
            </ChakraSkeleton>
            <ChakraSkeleton my="2"> <Text fontSize="2xl" w={{ base: "32vw", lg: "16vw" }}>
              "Phoebe Bridgers"
              </Text>
            </ChakraSkeleton>
            <ChakraSkeleton my="2"> <Text fontSize="2xl" w={{ base: "24vw", lg: "13vw" }}>
              "Punisher"
              </Text>
            </ChakraSkeleton>
          </Flex>
        </Flex>
    </Center>
  );
};