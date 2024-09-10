module.exports = {
  collectCoverage: true,
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "\\.(svg)$": "<rootDir>/test/mocks/svgMock.js",
    "\\.(png)$": "<rootDir>/test/mocks/pngMock.js",
  },
  testMatch: ["**/?(*.)+(spec|test).[jt]s?(x)", "!**/?(*.)+(accessibility.)(spec|test).[jt]s?(x)"],
  transform: {
    "^.+\\.[tj]sx?$": "babel-jest",
  },
};
