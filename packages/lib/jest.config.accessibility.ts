import type { Config } from "jest";

const configAccessibility: Config = {
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "\\.(svg)$": "<rootDir>/test/mocks/svgMock.ts",
    "\\.(png)$": "<rootDir>/test/mocks/pngMock.ts",
  },
  testMatch: ["**/?(*.)+(accessibility.)(spec|test).[jt]s?(x)"],
  setupFilesAfterEnv: ["<rootDir>/setupJestAxe.ts"],
  transform: {
    "^.+\\.[tj]sx?$": "babel-jest",
  },
};

export default configAccessibility;
