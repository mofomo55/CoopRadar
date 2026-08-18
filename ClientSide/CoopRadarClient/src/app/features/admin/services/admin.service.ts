import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AdminService {
  readonly stats = signal({
    totalProperties: 128,
    activeUsers: 845,
    pendingApprovals: 14
  });
}
