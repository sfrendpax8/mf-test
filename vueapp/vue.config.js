const port = 8081;
const projectName = 'vueapp'; // can probably retrieve through script or packageJson property

module.exports = {
  // In this scope, we can alter the raw webpack
  configureWebpack: {
    output: {
      filename: `js/${projectName}.js`,
      devtoolNamespace: "vueapp",
    },
    externals: ['vue'],
  },

  // In this scope, we put stuff available through Vue Configuration Reference
  devServer: {
    https: false,
    host: 'localhost',
    port,
  },
  filenameHashing: false,
};

