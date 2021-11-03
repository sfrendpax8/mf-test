import { setPublicPath } from "systemjs-webpack-interop";

/**
 * This sets up a dynamic publicPath for webpack, to make sure that assets and relative files are always loaded from the correct path
 */
setPublicPath("@test/vueapp");
// setPublicPath("http://localhost:8500");
