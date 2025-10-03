import { defineConfig } from "vitest/config";
import path from "path";
import viteReact from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    viteReact({
      jsxImportSource: "@emotion/react",
      babel: {
        plugins: ["@emotion/babel-plugin"],
      },
    }),
  ],
  test: {
    globals: true,
    environment: "jsdom",
    include: ["**/?(*.)+(accessibility.)(spec|test).[jt]s?(x)"],
  },
  resolve: {
    alias: {
      "\\.(css|less|scss|sass)$": path.resolve(__dirname, "test/mocks/cssMock.ts"),
      "\\.(svg)$": path.resolve(__dirname, "test/mocks/svgMock.ts"),
      "\\.(png)$": path.resolve(__dirname, "test/mocks/pngMock.ts"),
    },
  },
});
