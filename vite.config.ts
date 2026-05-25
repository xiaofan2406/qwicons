import { qwikVite } from "@builder.io/qwik/optimizer";
import { defineConfig } from "vite";

export default defineConfig(() => {
  return {
    build: {
      target: "es2020",
      lib: {
        entry: ["./src/icons/lu/lu.js", "./src/entry.lib.ts"],
        formats: ["es", "cjs"],
        fileName: (format, entry) =>
          `${entry}.qwik.${format === "es" ? "mjs" : "cjs"}`,
      },
    },
    plugins: [qwikVite()],
  };
});
