import { useEffect } from "react";
import { useToDo } from "../store/store";
import { List, Text, Box } from "@chakra-ui/react";
import TodoItem from "./TodoItem";

const TodoList = ({ setOpenNewTodo, setOpenEdit }) => {
  const todos = useToDo((state) => state.todos);
  const getAllTodos = useToDo((state) => state.getAllTodos);
  const updateToDo = useToDo((state) => state.updateToDo);
  const deleteToDo = useToDo((state) => state.removeTodo);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        await getAllTodos();
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };
    fetchTodos();
  }, [getAllTodos]);

  return (
    <>
      {todos.length !== 0 ? (
        <List.Root
          p={10}
          gapY={4}
          maxW={"50%"}
          m={"0 auto"}
          borderRadius={"8px"}
          bg={"teal.700"}
          color={"#fff"}
          boxShadow={"7px 7px 27px 6px rgba(0,0,0,0.36)"}
        >
          {todos.map((todo) => (
            <TodoItem
              key={todo._id}
              todo={todo}
              updateToDo={updateToDo}
              deleteToDo={deleteToDo}
              setOpenEdit={setOpenEdit}
            />
          ))}
        </List.Root>
      ) : (
        <Text
          fontSize="xl"
          textAlign={"center"}
          fontWeight="bold"
          color={{ base: "#141414", _dark: "#fff" }}
          letterSpacing={"0.1em"}
        >
          No products found 😢{" "}
          <Box as={"button"} onClick={() => setOpenNewTodo(true)}>
            <Text
              as="span"
              color="blue.500"
              _hover={{ textDecoration: "underline" }}
            >
              Create a New Todo
            </Text>
          </Box>
        </Text>
      )}
    </>
  );
};

export default TodoList;
