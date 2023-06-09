const path = require("path");
module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/angular",
  features: {
    interactionsDebugger: true,
  },
  docs: {
    autodocs: true,
  },
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.htm$/,
      use: { loader: "simple-nunjucks-loader" },
    });
    return config;
  },
  core: {
    builder: "webpack5",
    disableTelemetry: true, // 👈 Disables telemetry
  },
};
