import { registerApplication, start } from "single-spa";
import { useAuth } from './auth';

registerApplication({
  name: "@test/vue3app",
  app: () => System.import("@test/vue3app"),
  activeWhen: '/vue3app',
});

// RUN AUTH AND GLOBAL STATE INIT HERE
function startApplication(props) {
  registerApplication({
    name: "@test/vueapp",
    app: () => System.import("@test/vueapp"),
    activeWhen: "/",
    customProps: {
      auth: props,
    },
  });

  start();
}

async function initAuth() {
  const auth = useAuth();

  const logoutBtn = document.getElementById('logout-button');
  logoutBtn.addEventListener('click', auth.logout);

  await auth.configureClient();

  const isAuthenticated = await auth.checkIfAuthenticated();

  console.log('isAuthenticated: ', isAuthenticated);

  if (isAuthenticated) {
    startApplication(auth);
  } else {
    const query = window.location.search;

    if (query.includes("code=") && query.includes("state=")) {
      await auth.completeAuthentication();
      startApplication(auth);
    } else {
      auth.goToLogin();
    }
  }
}

initAuth();
