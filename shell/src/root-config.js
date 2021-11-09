import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@test/vueapp",
  app: () => System.import("@test/vueapp"),
  activeWhen: "/vueapp",
});

registerApplication({
  name: "@test/shared-components",
  app: () => System.import("@test/shared-components"),
  activeWhen: "/shared",
});

start();
