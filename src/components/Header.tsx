import { ChevronDownIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Flex,
  Text,
  Spacer,
  Box,
  Link as CLink,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Link,
  Button,
  background,
} from "@chakra-ui/react";
import { FaChevronCircleDown } from "react-icons/fa";
import { DarkModeSwitch } from "./DarkModeSwitch";

export const Header = () => (
  <Box h="100%" w="100%">
    <Flex
      direction="row"
      alignItems="center"
      justifyContent="center"
      h="100%"
      w="100%"
    >
      <Box>
        <CLink mr="12">home</CLink> <CLink mr="12">blog</CLink>{" "}
        <Menu>
          <MenuButton as={CLink}>
            cv <ChevronDownIcon mx='2px' />
          </MenuButton>
          <MenuList>
            <MenuItem>
              <CLink href="https://s3.natalie.sh/nano/cv.pdf" isExternal>
                PDF <ExternalLinkIcon mb='4px' />
              </CLink>
            </MenuItem>
            <MenuItem>
              <CLink href="https://read.cv/nat" isExternal>
                read.cv <ExternalLinkIcon mb='2px' />
              </CLink>
            </MenuItem>
            <MenuItem>
              <CLink
                href="https://www.overleaf.com/read/kkhnkxdftmpm"
                isExternal
              >
                LaTeX <ExternalLinkIcon mb='4px' />
              </CLink>
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
      <Spacer />
      <DarkModeSwitch />
    </Flex>
  </Box>
);
export default Header;
