module.exports = {
  extends: "universe/native",
  plugins: ["react-hooks"],
  rules: {
    "react-hooks/exhaustive-deps": "error",
    "react-hooks/rules-of-hooks": "error",
  },
};
