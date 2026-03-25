module.exports = {
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "\\.(svg)$": "<rootDir>/test/mocks/svgMock.js",
    "\\.(png)$": "<rootDir>/test/mocks/pngMock.js",
    "\\.(woff|woff2|ttf|eot|otf)$": "<rootDir>/test/mocks/fileMock.ts",
  },
  testMatch: ["**/?(*.)+(accessibility.)(spec|test).[jt]s?(x)"],
  setupFilesAfterEnv: ["<rootDir>/setupJestAxe.js"],
};
