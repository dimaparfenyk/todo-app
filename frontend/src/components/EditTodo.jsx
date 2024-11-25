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
import { useState, useEffect } from "react";

const EditTodo = ({ open, setOpen, todo }) => {
  const updateToDo = useToDo((state) => state.updateToDo);
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");

  const isValidUrl = (url) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  useEffect(() => {
    if (todo) {
      setTitle(todo.title);
      setLink(todo.link);
    }
  }, [todo]);

  const handleSave = async () => {
    if (!title) {
      return toaster.create({
        title: "Fill a title.",
        type: "error",
      });
    }

    if (link && !isValidUrl(link)) {
      return toaster.create({
        title: "Fill a valid link.",
        type: "error",
      });
    }

    try {
      await updateToDo(todo._id, { title, link });

      setOpen(false);
      toaster.create({
        title: "Todo successfully updated",
        type: "success",
      });
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  return (
    <>
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
              placeholder="Edit your todo's title"
              onKeyDown={(e) => e.key === "Enter" && handleSave()}
            />
            <Input
              value={link}
              onChange={(e) => setLink(e.target.value)}
              placeholder="Edit your todo's link"
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
      <Toaster />
    </>
  );
};

export default EditTodo;
