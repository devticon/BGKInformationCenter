import { Routes } from './routes';

export interface Tab {
  icon: string;
  route: Routes;
}

export const tabMenu: Tab[] = [
  {
    icon: 'grid-outline',
    route: Routes.Lists,
  },
  {
    icon: 'newspaper-outline',
    route: Routes.News,
  },
  {
    icon: 'chatbox-outline',
    route: Routes.TeamsList,
  },
  {
    icon: 'search-outline',
    route: Routes.Search,
  },
];
