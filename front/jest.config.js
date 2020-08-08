module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleNameMapper: {
    "\\.(css)$": "<rootDir>/styleMock.js",
  },
};
