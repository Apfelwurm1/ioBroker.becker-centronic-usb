import config from "@iobroker/eslint-config";

export default [
  ...config,
  {
    ignores: [
      ".dev-server/",
      ".vscode/",
      "*.test.js",
      "test/**/*.js",
      "node_modules/",
    ],
  },
  {
    rules: {
      "prettier/prettier": ["error", { endOfLine: "auto" }],
    },
  },
];
