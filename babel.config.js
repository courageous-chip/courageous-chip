module.exports = function (api) {
  api.cache(true);
  return {
    plugins: ["graphql-tag"],
    presets: ["babel-preset-expo", "module:react-native-dotenv"],
  };
};
