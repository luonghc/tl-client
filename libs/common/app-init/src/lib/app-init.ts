import { keycloak } from '@trello/auth/data-access';

export class AppInit {
  static async initApp() {
    await this.initAuth();
  }

  private static async initAuth() {
    if (keycloak.authenticated) {
      return;
    }

    await keycloak.init({
      onLoad: 'login-required',
      pkceMethod: 'S256',
    });
  }
}
