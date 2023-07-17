import { Client, messageCallbackType } from '@stomp/stompjs';

export class StompClient {
  private client: Client;
  public static _instance: StompClient;

  private constructor() {
    this.client = new Client({
      brokerURL: import.meta.env.VITE_WS_URL,
    });
  }

  subscribe(destination: string, callback: messageCallbackType) {
    this.client.subscribe(destination, callback);
  }

  static get instance(): StompClient {
    if (!this._instance) {
      return new StompClient();
    }

    return this._instance;
  }
}
