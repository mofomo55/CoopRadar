export interface User {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  displayName?: string;
  avatarUrl?: string;
  phone?: string;
  role?: 'user' | 'admin' | 'company';
  city?: string;
  bio?: string;
  createdAt?: string;
}
