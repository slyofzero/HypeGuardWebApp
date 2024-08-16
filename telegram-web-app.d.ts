// src/telegram-web-app.d.ts
interface TelegramWebApp {
  initData: string;
  initDataUnsafe: any;
  close(): void;
  ready(): void;
  expand(): void;
  onEvent(eventType: string, callback: () => void): void;
  sendData(data: string): void;
}

interface Window {
  Telegram: {
    WebApp: TelegramWebApp;
  };
}
