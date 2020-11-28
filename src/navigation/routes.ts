export enum Routes {
  Lists = 'Lists',
  NewsList = 'NewsList',
  TeamsList = 'TeamsList',
  Search = 'Search',
  Chat = 'Chat',
}

export type TabParamList = {
  [Routes.Lists]: undefined;
  [Routes.NewsList]: undefined;
  [Routes.Search]: undefined;
  [Routes.TeamsList]: undefined;
  [Routes.Chat]: { teamId: string; channelId: string };
};
