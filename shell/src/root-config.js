import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@test/vueapp",
  app: () => System.import("@test/vueapp"),
  activeWhen: "/test",
});

start();
