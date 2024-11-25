import { Center, Container, Flex, Heading } from "@chakra-ui/react";
import TodoList from "./components/TodoList";
import Header from "./components/Header";
import NewTodo from "./components/NewTodo";
import EditTodo from "./components/EditTodo";
import { useState } from "react";
import FilterButtons from "./components/FilterButtons";

const App = () => {
  const [openNewTodo, setOpenNewTodo] = useState(false);
  const [openEditTodo, setOpenEditTodo] = useState(false);
  const [currentTodo, setCurrentTodo] = useState(null);

  const handleEditTodoOpen = (todo) => {
    setCurrentTodo(todo);
    setOpenEditTodo(true);
  };

  return (
    <Flex display="flex" minH="100vh" direction="column">
      <Header setOpen={setOpenNewTodo} />
      <Container
        maxW="container.xl"
        py={12}
        w={"100vw"}
        flex={"1"}
        bg={{ _dark: "#3b3b3b" }}
      >
        <Center marginBottom={"20px"}>
          <Heading as={"h1"} textStyle={"3xl"}>
            To Do App
          </Heading>
        </Center>

        <FilterButtons />
        <TodoList
          setOpenNewTodo={setOpenNewTodo}
          setOpenEdit={handleEditTodoOpen}
        />

        <NewTodo open={openNewTodo} setOpen={setOpenNewTodo} />
        <EditTodo
          open={openEditTodo}
          setOpen={setOpenEditTodo}
          todo={currentTodo}
        />
      </Container>
    </Flex>
  );
};

export default App;
