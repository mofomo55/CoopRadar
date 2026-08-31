import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'apartments', pathMatch: 'full' },

  {
    path: 'apartments',
    loadComponent: () =>
      import('./features/apartments/pages/apartment-list/apartment-list').then(
        (m) => m.ApartmentListPage
      )
  },
  {
    path: 'apartments/:id',
    loadComponent: () =>
      import('./features/apartments/pages/apartment-detail/apartment-detail').then(
        (m) => m.ApartmentDetailPage
      )
  },

  {
    path: 'favorites',
    loadComponent: () =>
      import('./features/favorites/pages/favorite-list/favorite-list').then(
        (m) => m.FavoriteListPage
      )
  },

  {
    path: 'companies',
    loadComponent: () =>
      import('./features/companies/pages/company-list/company-list').then(
        (m) => m.CompanyListPage
      )
  },

  {
    path: 'filters',
    loadComponent: () =>
      import('./features/filters/pages/filter-modal/filter-modal').then(
        (m) => m.FilterModalPage
      )
  },
  {
    path: 'alerts',
    loadComponent: () =>
      import('./features/filters/pages/alert-settings/alert-settings').then(
        (m) => m.AlertSettingsPage
      )
  },
  {
    path: 'impressum',
    loadComponent: () =>
      import('./features/legal/pages/impressum/impressum').then(
        (m) => m.ImpressumPage
      )
  },
  {
    path: 'datenschutz',
    loadComponent: () =>
      import('./features/legal/pages/datenschutz/datenschutz').then(
        (m) => m.DatenschutzPage
      )
  },
  {
    path: 'nutzungsbedingungen',
    loadComponent: () =>
      import('./features/legal/pages/nutzungsbedingungen/nutzungsbedingungen').then(
        (m) => m.NutzungsbedingungenPage
      )
  },
  {
    path: 'app',
    loadComponent: () =>
      import('./features/app/pages/coop-radar-app/coop-radar-app').then(
        (m) => m.CoopRadarAppPage
      )
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./features/about/pages/about/about').then((m) => m.AboutPage)
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./features/contact/pages/contact/contact').then(
        (m) => m.ContactPage
      )
  },
  {
    path: 'my-listings',
    loadComponent: () =>
      import('./features/listing/pages/my-listings/my-listings').then(
        (m) => m.MyListingsPage
      )
  },
  {
    path: 'notifications',
    loadComponent: () =>
      import('./features/notifications/pages/notifications/notifications').then(
        (m) => m.NotificationsPage
      )
  },

  {
    path: 'login',
    loadComponent: () =>
      import('./features/auth/pages/login/login').then((m) => m.LoginPage)
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./features/auth/pages/register/register').then(
        (m) => m.RegisterPage
      )
  },
  {
    path: 'forgot-password',
    loadComponent: () =>
      import('./features/auth/pages/forgot-password/forgot-password').then(
        (m) => m.ForgotPasswordPage
      )
  },
  {
    path: 'welcome',
    loadComponent: () =>
      import('./features/auth/pages/auth-welcome/auth-welcome').then(
        (m) => m.AuthWelcomePage
      )
  },

  {
    path: 'profile',
    loadComponent: () =>
      import('./features/profile/pages/public-profile/public-profile').then(
        (m) => m.PublicProfilePage
      )
  },
  {
    path: 'profile/edit',
    loadComponent: () =>
      import('./features/profile/pages/edit-profile/edit-profile').then(
        (m) => m.EditProfilePage
      )
  },

  {
    path: 'admin',
    loadComponent: () =>
      import('./features/admin/pages/admin-dashboard/admin-dashboard').then(
        (m) => m.AdminDashboardPage
      )
  }
];
