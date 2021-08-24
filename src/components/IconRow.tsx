import { Flex } from "@chakra-ui/react";
import { IoLogoTwitch } from "react-icons/io";
import { FaGithub, FaTwitch, FaTwitter, FaDiscord } from "react-icons/fa";
import { IconType } from "react-icons/lib";
import { Box } from "@chakra-ui/react";

const IconRow = () => {
  let icons = [
    { i: <FaGithub />, url: "https://github.com/kanbaru" },
    { i: <FaTwitter />, url: "https://twitter.com/natalielier" },
    { i: <IoLogoTwitch />, url: "https://twitch.tv/natelier" },
    { i: <FaDiscord />, url: "https://r.izu.moe/discord" },
  ];
  return (
    <Flex fontSize="2em" pt="2" pb="8" >
      {icons.map((e) => {
        return (
          <Box pr=".25em" key={e.url}>
            <a href={e.url}>{e.i}</a>
          </Box>
        );
      })}
    </Flex>
  );
};

export default IconRow;
