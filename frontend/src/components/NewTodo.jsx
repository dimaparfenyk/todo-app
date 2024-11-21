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
import { useRef } from "react";

const NewTodo = ({ open, setOpen }) => {
  const ref = useRef();
  const addTodo = useToDo((state) => state.addTodo);

  const handleAddTodo = () => {
    addTodo({ title: ref.current.value });
    setOpen(false);
  };

  return (
    <DrawerRoot open={open} onOpenChange={(e) => setOpen(e.open)}>
      <DrawerBackdrop />
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Add new ToDo</DrawerTitle>
        </DrawerHeader>
        <DrawerBody>
          <Input
            placeholder="Type here..."
            ref={ref}
            onKeyDown={(e) => e.key === "Enter" && handleAddTodo()}
            autoFocus
          />
        </DrawerBody>
        <DrawerFooter>
          <DrawerActionTrigger asChild>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
          </DrawerActionTrigger>
          <Button onClick={handleAddTodo}>Add</Button>
        </DrawerFooter>
        <DrawerCloseTrigger />
      </DrawerContent>
    </DrawerRoot>
  );
};

export default NewTodo;
