import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const customConfig = defineConfig({
  globalCss: {
    body: {
      bg: { base: "#FDF7F2", _dark: "#3b3b3b" },
      color: { base: "#141414", _dark: "#fff" },
    },
  },
});

export const system = createSystem(defaultConfig, customConfig);
