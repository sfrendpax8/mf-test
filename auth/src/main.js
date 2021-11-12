import './set-public-path';

import createAuth0Client from '@auth0/auth0-spa-js';

let auth0 = null;

// Fetch credential file from server
// const fetchAuthConfig = () => fetch("/auth_config.json");

const configureClient = async () => {
  // const response = await fetchAuthConfig();
  // const config = await response.json();

  auth0 = await createAuth0Client({
    // domain: config.domain,
    // client_id: config.clientId

    // Hardcode values for now
    domain: 'dev-dy6qewag.us.auth0.com',
    client_id: 'xolrBAkuIespaqYqgirdvp2eYiznDOap',
  });
};

window.onload = async () => {
  await configureClient();
  window.auth0 = auth0;
  console.log('done with auth');
  // console.log(await auth0.isAuthenticated());
}
