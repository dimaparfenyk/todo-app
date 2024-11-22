import { Flex, HStack, IconButton, Image } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { FaPlus } from "react-icons/fa";
import { ColorModeButton } from "./ui/color-mode";

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-360deg);
  }
`;

export const NavBar = ({ setOpen }) => {
  return (
    <Flex
      justify={"space-between"}
      align={"center"}
      flexDir={{ base: "column", sm: "row" }}
    >
      <Image
        src="../../public/MiniLogo.png"
        _hover={{
          animation: `${rotate360} 0.5s ease`,
        }}
      />
      <Flex gapX={4}>
        <HStack spacing={2} alignItems={"center"}>
          <ColorModeButton transition={"all 0.4s ease"} />
          <IconButton
            colorPalette="cyan"
            w={12}
            h={12}
            px={4}
            transition={"all 0.4s ease"}
            css={{
              _icon: {
                width: "5",
                height: "5",
                fill: "#fff",
                stroke: "#fff",
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
