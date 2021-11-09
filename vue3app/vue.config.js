const port = 8084;
const projectName = 'vue3app'; // can probably retrieve through script or packageJson property

module.exports = {
  // In this scope, we can alter the raw webpack
  configureWebpack: {
    output: {
      filename: `js/${projectName}.js`,
      devtoolNamespace: projectName,
    },
    externals: [/^@test\/.+/],
  },

  // In this scope, we put stuff available through Vue Configuration Reference
  devServer: {
    https: false,
    host: 'localhost',
    port,
  },
  filenameHashing: false,
};

