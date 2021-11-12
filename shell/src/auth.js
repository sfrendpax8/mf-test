import createAuth0Client from '@auth0/auth0-spa-js';


// This would be set up in a different MF, but can live as a separate auth file for now

export const useAuth = () => {
  let auth0;

  return {
    async configureClient() {
      auth0 = await createAuth0Client({
        // Hardcode values for now
        domain: 'dev-dy6qewag.us.auth0.com',
        client_id: 'xolrBAkuIespaqYqgirdvp2eYiznDOap',
      });
    },
    goToLogin() {
      return auth0.loginWithRedirect({
        redirect_uri: 'http://localhost:8082'
      });
    },
    async completeAuthentication() {
      // Process the login state
      await auth0.handleRedirectCallback();
      // Use replaceState to redirect the user away and remove the querystring parameters
      window.history.replaceState({}, document.title, "/");
    },
    logout() {
      auth0.logout({
        returnTo: 'http://localhost:8082',
      });
    },
    checkIfAuthenticated() {
      return auth0.isAuthenticated();
    },
  }
}
