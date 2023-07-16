import { httpClient } from '@trello/core';
import { keycloak } from '@trello/auth/data-access';

export class AuthInterceptor {
  static onInit() {
    this.authInterceptor();
    this.unauthorizedInterceptor();
  }

  static authInterceptor() {
    httpClient.interceptors.request.use(function (config) {
      const token = keycloak.token;
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
      return config;
    });
  }

  static unauthorizedInterceptor() {
    httpClient.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error.response.status === 401) {
          await keycloak.init({
            onLoad: 'login-required',
            pkceMethod: 'S256',
          });
        }
      }
    );
  }
}
