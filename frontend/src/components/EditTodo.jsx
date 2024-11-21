import { Button, Input } from "@chakra-ui/react";
import {
  DrawerActionTrigger,
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
} from "./ui/drawer";
import { useToDo } from "../store/store";
import { useState, useEffect } from "react";

const EditTodo = ({ open, setOpen, todo }) => {
  const updateToDo = useToDo((state) => state.updateToDo);
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (todo) {
      setTitle(todo.title);
    }
  }, [todo]);

  const handleSave = async () => {
    try {
      await updateToDo(todo._id, { title });
      setOpen(false);
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  return (
    <DrawerRoot open={open} onOpenChange={(e) => setOpen(e.open)}>
      <DrawerBackdrop />
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Edit ToDo</DrawerTitle>
        </DrawerHeader>
        <DrawerBody>
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Edit your todo"
            onKeyDown={(e) => e.key === "Enter" && handleSave()}
          />
        </DrawerBody>
        <DrawerFooter>
          <DrawerActionTrigger asChild>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
          </DrawerActionTrigger>
          <Button onClick={handleSave} type="submit">
            Edit
          </Button>
        </DrawerFooter>
        <DrawerCloseTrigger />
      </DrawerContent>
    </DrawerRoot>
  );
};

export default EditTodo;
