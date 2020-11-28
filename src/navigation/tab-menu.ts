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
    icon: 'newspaper-outline',
    route: Routes.Home2,
  },
  {
    icon: 'chatbox-outline',
    route: Routes.Home3,
  },
  {
    icon: 'search-outline',
    route: Routes.Home4,
  },
];
