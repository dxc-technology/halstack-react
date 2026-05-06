import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  testEnvironment: "jsdom",
  collectCoverage: true,
  coveragePathIgnorePatterns: [
    "utils.ts",
    "index.ts",
    "test/mocks",
    ".*Context\\.tsx$",
  ],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "\\.(svg)$": "<rootDir>/test/mocks/svgMock.ts",
    "\\.(png)$": "<rootDir>/test/mocks/pngMock.ts",
    "^screens/(.*)$": "<rootDir>/screens/$1",
    "^hooks/(.*)$": "<rootDir>/hooks/$1",
    "^@/(.*)$": "<rootDir>/$1",
  },
  testMatch: ["**/?(*.)+(spec|test).[jt]s?(x)", "!**/?(*.)+(accessibility.)(spec|test).[jt]s?(x)"],
};

export default createJestConfig(customJestConfig);
