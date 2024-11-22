import { Center, Text } from "@chakra-ui/react";

const TotalTodos = ({ todos }) => {
  return todos.length > 0 ? (
    <Center marginBottom={"20px"}>
      <Text textStyle={"2xl"}>Total: {todos.length}</Text>
    </Center>
  ) : (
    <></>
  );
};

export default TotalTodos;
