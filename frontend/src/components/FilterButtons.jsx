import { Button, Center, For, Stack } from "@chakra-ui/react";
import { useFilter } from "../store/store";

const FilterButtons = () => {
  const { filter, setFilter } = useFilter();

  return (
    <Center marginBottom={8}>
      <Stack spacing={2} direction="row">
        <For each={["all", "completed", "not completed"]}>
          {(title) => (
            <Button
              key={title}
              colorPalette="teal"
              w={"132px"}
              textTransform={"uppercase"}
              disabled={filter === title}
              onClick={() => {
                setFilter(title);
              }}
            >
              {title}
            </Button>
          )}
        </For>
      </Stack>
    </Center>
  );
};

export default FilterButtons;
