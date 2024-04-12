import type { Config } from "jest";

const configAccessibility: Config = {
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "\\.(svg)$": "<rootDir>/test/mocks/svgMock.js",
    "\\.(png)$": "<rootDir>/test/mocks/pngMock.js",
  },
  testMatch: ["**/?(*.)+(accessibility.)(spec|test).[jt]s?(x)"],
  setupFilesAfterEnv: ["<rootDir>/setupJestAxe.ts"],
};

export default configAccessibility;
