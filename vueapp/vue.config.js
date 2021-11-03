const path = require("path");

const port = 8081;

module.exports = {
  // css: {
  //   extract: false,
  // },
  configureWebpack: {
    // mode: 'production',
    entry: path.resolve(__dirname, "src/main"),
    output: {
      filename: "test.js",
      libraryTarget: "system", // in their cli tool, it looks like they're setting this to 'umd' but that doesn't work for me
      devtoolNamespace: "vueapp",
      jsonpFunction: 'webpackJsonp_vueapp', // make sure each code split is loaded with unique name / prevents clashing with other apps
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
    optimization: {
      splitChunks: {
        minSize: 1000000000, // temp for disabling vendor chunks. With this gone, something happens to the test.js module where it's not the same format
      },
    },
    // externals: ["single-spa", "vue"]
  },
  filenameHashing: false,
};
