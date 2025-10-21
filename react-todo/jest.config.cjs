// jest.config.cjs
module.exports = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.[jt]sx?$": "babel-jest",
  },
  moduleFileExtensions: ["js", "jsx"],
  testMatch: ["**/__tests__/**/*.test.js"],
};
