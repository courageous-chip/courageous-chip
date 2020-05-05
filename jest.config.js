module.exports = {
  // "The above additions let's Jest know to collect coverage of all .js, .jsx,
  // .ts, & .tsx file types and not within /coverage, /node_modules/ and our 3
  // project config files (add/remove more exclusions to this list to match your
  // Expo app needs)."
  //
  // https://docs.expo.io/guides/testing-with-jest/#code-coverage-reports
  collectCoverageFrom: [
    "!**/__generated__/**",
    "!**/.eslintrc.js",
    "!**/@types/**",
    "!**/babel.config.js",
    "!**/coverage/**",
    "!**/jest.config.js",
    "!**/node_modules/**",
    "!**/prettier.config.js",
    "!**/scripts/**",
    "**/*.{js,jsx,ts,tsx}",
  ],
  // "A Jest preset that mocks out the native side of the Expo SDK and handles
  // some configuration for you"
  //
  // https://docs.expo.io/guides/testing-with-jest/#installation
  //
  preset: "jest-expo",
  // "A great starting point to make sure any modules you may be using within
  // /node_modules/ are transpiled when running jest. This should cover the
  // majority of your needs but you can always add to this pattern list as you see
  // fit."
  //
  // https://docs.expo.io/guides/testing-with-jest/#jest-configuration
  //
  transformIgnorePatterns: [
    "node_modules/(?!(jest-)?react-native|react-clone-referenced-element|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|@sentry/.*)",
  ],
};
