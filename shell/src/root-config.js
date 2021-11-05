import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@test/vueapp",
  app: () => System.import("@test/vueapp"),
  activeWhen: "/test",
});

// registerApplication({
//   name: "@test/vueapp2",
//   app: () => System.import("@test/vueapp2"),
//   activeWhen: "/",
// });

start();
