import { Center, Container, Heading } from "@chakra-ui/react";
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
    <>
      <Header setOpen={setOpenNewTodo} />
      <Container
        maxW="container.xl"
        py={12}
        w={"100vw"}
        h={"100vh"}
        bg={{ base: "#fdfdfd", _dark: "#7a7a7a" }}
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
    </>
  );
};

export default App;
