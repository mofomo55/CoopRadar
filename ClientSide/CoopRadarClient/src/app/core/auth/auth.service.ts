import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly _isAuthenticated = signal(false);
  readonly isAuthenticated = this._isAuthenticated.asReadonly();

  login(email: string, password: string): boolean {
    void email;
    void password;
    this._isAuthenticated.set(true);
    return true;
  }

  logout(): void {
    this._isAuthenticated.set(false);
  }
}
