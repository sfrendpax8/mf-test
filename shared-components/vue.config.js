const port = 8083;
const projectName = 'shared-components'; // can probably retrieve through script or packageJson property

module.exports = {
  // In this scope, we can alter the raw webpack
  configureWebpack: {
    output: {
      filename: `js/${projectName}.js`,
      devtoolNamespace: projectName,
    },
    // This library is in Vue3, but shared Vue is 2. So we include Vue in the bundle. If a lot of apps use 3, we should also share 3
    externals: [],
  },

  // In this scope, we put stuff available through Vue Configuration Reference
  devServer: {
    https: false,
    host: 'localhost',
    port,
  },
  filenameHashing: false,
};

