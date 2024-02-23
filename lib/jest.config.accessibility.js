module.exports = {
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "\\.(svg)$": "<rootDir>/test/mocks/svgMock.js",
    "\\.(png)$": "<rootDir>/test/mocks/pngMock.js",
    "^uuid$": "uuid",
  },
  testMatch: ["**/?(*.)+(accessibility.test).[jt]s?(x)"],
  setupFilesAfterEnv: ['<rootDir>/src/setupJestAxe.js']
};
