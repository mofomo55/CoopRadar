import { Injectable, signal } from '@angular/core';

export interface NotificationMessage {
  id: number;
  type: 'success' | 'error' | 'info';
  text: string;
}

@Injectable({ providedIn: 'root' })
export class NotificationService {
  private readonly _messages = signal<NotificationMessage[]>([]);
  readonly messages = this._messages.asReadonly();

  show(type: NotificationMessage['type'], text: string): void {
    const nextMessage: NotificationMessage = {
      id: Date.now(),
      type,
      text
    };

    this._messages.update((current) => [...current, nextMessage]);
  }

  clear(): void {
    this._messages.set([]);
  }
}
