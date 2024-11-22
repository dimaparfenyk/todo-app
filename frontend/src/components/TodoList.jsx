import { useEffect, useMemo } from "react";
import { useFilter, useToDo } from "../store/store";
import { List, Text, Box } from "@chakra-ui/react";
import TodoItem from "./TodoItem";
import TotalTodos from "./TotalTodos";

const TodoList = ({ setOpenNewTodo, setOpenEdit }) => {
  const { todos, getAllTodos, updateToDo, deleteToDo } = useToDo();
  const filter = useFilter((state) => state.filter);

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

  const filteredTodos = useMemo(() => {
    switch (filter) {
      case "completed":
        return todos.filter((todo) => todo.completed);
      case "not completed":
        return todos.filter((todo) => !todo.completed);

      default:
        return todos;
    }
  }, [filter, todos]);

  return (
    <>
      <TotalTodos todos={filteredTodos} />
      {filteredTodos.length !== 0 ? (
        <List.Root
          p={10}
          gapY={4}
          maxW={"50%"}
          m={"0 auto"}
          borderRadius={"8px"}
          bg={"teal"}
          color={"#fff"}
          boxShadow={"7px 7px 27px 6px rgba(0,0,0,0.36)"}
        >
          {filteredTodos.map((todo) => (
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
