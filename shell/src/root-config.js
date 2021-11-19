import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@test/vueapp",
  app: () => System.import("@test/vueapp"),
  activeWhen: "/vueapp",
});

registerApplication({
  name: "@test/vue3app",
  app: () => System.import("@test/vue3app"),
  activeWhen: "/vue3app",
});

registerApplication({
  name: "@test/bat",
  app: () => System.import("@test/bat"),
  activeWhen: "/bat",
});

start();
