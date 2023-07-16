import Keycloak from 'keycloak-js';

export const keycloak = new Keycloak({
  clientId: 'trello',
  realm: 'trello',
  url: 'http://localhost:8888',
});
