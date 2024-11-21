import { Box, Container } from "@chakra-ui/react";
import { NavBar } from "./NavBar";

const Header = ({ setOpen }) => {
  return (
    <Box as={"header"} bg={{ base: "#222222/60", _dark: "gray.500" }}>
      <Container>
        <NavBar setOpen={setOpen} />
      </Container>
    </Box>
  );
};

export default Header;
