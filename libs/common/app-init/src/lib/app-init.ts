import { keycloak } from '@trello/auth/data-access';
import { AuthInterceptor } from '@trello/auth/util';

export class AppInit {
  static async initApp() {
    await this.initAuth();
    AuthInterceptor.onInit();
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
