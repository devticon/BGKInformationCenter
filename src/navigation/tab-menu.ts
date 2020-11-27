import { Routes } from './routes';

export interface Tab {
  icon: string;
  route: Routes;
}

export const tabMenu: Tab[] = [
  {
    icon: 'grid-outline',
    route: Routes.Home,
  },
  {
    icon: 'bookmark-outline',
    route: Routes.Home2,
  },
  {
    icon: 'add-circle-outline',
    route: Routes.Home3,
  },
  {
    icon: 'search-outline',
    route: Routes.Home4,
  },
];
