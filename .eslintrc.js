// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  // Test files only
  files: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],

  extends: ["expo", "prettier", "plugin:testing-library/react"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
  },
};
