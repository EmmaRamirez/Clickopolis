type Theme = 'dark' | 'light';

export interface Settings {
  notifications: {
    achievements: boolean;
    events: boolean;
    wonders: boolean;
  }

  pinMenu: boolean;
  theme: Theme;
}
