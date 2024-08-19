import type { Config } from "jest";

const config: Config = {
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
