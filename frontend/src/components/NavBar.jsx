import { Flex, HStack, IconButton, Image } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";
import { ColorModeButton } from "./ui/color-mode";

export const NavBar = ({ setOpen }) => {
  return (
    <Flex
      justify={"space-between"}
      align={"center"}
      flexDir={{ base: "column", sm: "row" }}
    >
      <Image src="../../public/MiniLogo.png" />
      <Flex gapX={4}>
        <HStack spacing={2} alignItems={"center"}>
          <ColorModeButton
            bg={{ base: "#1AB8DB", _dark: "white" }}
            _hover={{ bg: "#1aa0db" }}
          />
          <IconButton
            bg={{ base: "#1AB8DB", _dark: "white" }}
            w={12}
            h={12}
            px={4}
            _hover={{ bg: "#1aa0db" }}
            css={{
              _icon: {
                width: "5",
                height: "5",
                fill: { base: "#fff", _dark: "gray.600" },
                stroke: { base: "#fff", _dark: "gray.600" },
              },
            }}
            onClick={() => setOpen(true)}
          >
            <FaPlus />
          </IconButton>
        </HStack>
      </Flex>
    </Flex>
  );
};
