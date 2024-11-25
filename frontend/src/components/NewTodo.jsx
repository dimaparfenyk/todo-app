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
import { toaster, Toaster } from "./ui/toaster";
import { useToDo } from "../store/store";
import { useRef } from "react";

const NewTodo = ({ open, setOpen }) => {
  const titleRef = useRef();
  const linkRef = useRef();
  const addTodo = useToDo((state) => state.addTodo);

  const handleAddTodo = () => {
    if (!titleRef.current.value) {
      return toaster.create({
        title: "Fill a title.",
        type: "error",
      });
    } else {
      toaster.create({
        title: "Todo added successfully.",
        type: "success",
      });
    }
    addTodo({ title: titleRef.current.value, link: linkRef.current.value });
    setOpen(false);
  };

  return (
    <>
      <DrawerRoot open={open} onOpenChange={(e) => setOpen(e.open)}>
        <DrawerBackdrop />
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Add new ToDo</DrawerTitle>
          </DrawerHeader>
          <DrawerBody>
            <Input
              placeholder="Type title here..."
              ref={titleRef}
              onKeyDown={(e) => e.key === "Enter" && handleAddTodo()}
              autoFocus
            />
            <Input
              placeholder="Type link here..."
              ref={linkRef}
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
            <Button onClick={handleAddTodo} type="submit">
              Add
            </Button>
          </DrawerFooter>
          <DrawerCloseTrigger />
        </DrawerContent>
      </DrawerRoot>
      <Toaster />
    </>
  );
};

export default NewTodo;
