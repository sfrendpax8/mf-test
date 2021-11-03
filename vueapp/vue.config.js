const path = require("path");

const port = 8081;

module.exports = {
  // css: {
  //   extract: false,
  // },
  configureWebpack: {
    entry: path.resolve(__dirname, "src/main"),
    output: {
      filename: "test.js",
      libraryTarget: "system", // in their cli tool, it looks like they're setting this to 'umd' but that doesn't work for me
      devtoolNamespace: "vueapp",
      jsonpFunction: 'vueapp', // make sure each code split is loaded with unique name / prevents clashing with other apps
    },
    devtool: "sourcemap",
    devServer: {
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
      disableHostCheck: true,
      sockPort: port,
      sockHost: "localhost",
      // https: true,
      port,
    },
    // makes sure we only get a single file
    // externals: ["vue"]
  },
  filenameHashing: false,
};
