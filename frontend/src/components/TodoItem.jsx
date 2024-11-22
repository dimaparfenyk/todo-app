import { Box, HStack, List, Text } from "@chakra-ui/react";
import { Checkbox } from "./ui/checkbox";
import { TiDelete } from "react-icons/ti";
import { FaRegEdit } from "react-icons/fa";

const TodoItem = ({ todo, updateToDo, deleteToDo, setOpenEdit }) => {
  return (
    <List.Item
      display={"flex"}
      alignItems={"center"}
      borderBottom={"1px solid #fff"}
      transition={"all 0.3s ease"}
      _hover={{ shadow: "lg" }}
    >
      <Checkbox
        colorPalette={"orange"}
        defaultChecked={todo.completed}
        onChange={() => {
          updateToDo(todo._id, { completed: !todo.completed });
        }}
      >
        <Text fontSize={"18px"}>{todo.title}</Text>
      </Checkbox>
      <HStack marginLeft={"auto"} gapX={4}>
        <Box
          as={"button"}
          p={"4px"}
          _icon={{ w: "28px", h: "28px", transition: "all 0.3s ease" }}
          _hover={{ _icon: { fill: "orange" } }}
          onClick={() => {
            setOpenEdit(todo);
          }}
        >
          <FaRegEdit />
        </Box>
        <Box
          as={"button"}
          p={"4px"}
          _icon={{ w: "32px", h: "32px", transition: "all 0.3s ease" }}
          _hover={{ _icon: { fill: "red" } }}
          onClick={() => {
            deleteToDo(todo._id);
          }}
        >
          <TiDelete />
        </Box>
      </HStack>
    </List.Item>
  );
};

export default TodoItem;
