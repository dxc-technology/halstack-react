module.exports = {
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "\\.(svg)$": "<rootDir>/test/mocks/svgMock.js",
    "\\.(png)$": "<rootDir>/test/mocks/pngMock.js",
    "^uuid$": "uuid",
  },
  testMatch: ["**/?(*.)+(accessibility.)(spec|test).[jt]s?(x)"],
  setupFilesAfterEnv: ['<rootDir>/setupJestAxe.js']
};
