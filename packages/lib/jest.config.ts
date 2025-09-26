import type { Config } from "jest";

const config: Config = {
  collectCoverage: true,
  coveragePathIgnorePatterns: [
    "utils.ts",
    "index.ts",
    ".*Context\\.tsx$", // Is deprecated and will be removed in the future
  ],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "\\.(svg)$": "<rootDir>/test/mocks/svgMock.ts",
    "\\.(png)$": "<rootDir>/test/mocks/pngMock.ts",
  },
  testMatch: ["**/?(*.)+(spec|test).[jt]s?(x)", "!**/?(*.)+(accessibility.)(spec|test).[jt]s?(x)"],
  transform: {
    "^.+\\.[tj]sx?$": "babel-jest",
  },
};

export default config;
