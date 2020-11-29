import { Icon, LoginRequired, Spinner, Text } from '@components';
import React, { FC, useMemo } from 'react';
import { SectionList, View } from 'react-native';
import { useSharePointLists } from '@hooks';
import { useSitesLists } from '@hooks';
import { useUsersLists } from '@hooks';
import { useAuthContext } from '../../contexts';
import ArticleRow from '../NewsListScreen/ArticleRow/ArticleRow';
import DocumentRow from './DocumentRow/DocumentRow';
import { styles } from './ListsScreen.styles';
import SiteRow from './SiteRow/SiteRow';
import UserRow from './UserRow/UserRow';

const getSectionIcon = (template: string): string => {
  switch (template) {
    case 'events':
      return 'calendar-outline';
    case 'documentLibrary':
      return 'documents-outline';
    case 'users':
      return 'people-outline';
    case 'sites':
      return 'bookmarks-outline';
    default:
      return 'apps-outline';
  }
};

const ListsScreen: FC = () => {
  const { isAuthenticated } = useAuthContext();
  const lists = useSharePointLists();
  const users = useUsersLists();
  const sites = useSitesLists();

  const sections = useMemo(() => {
    return [
      ...lists.map(list => ({ ...list, data: list.items })),
      sites.length && { template: 'sites', displayName: 'Strony', data: sites },
      users.length && { template: 'users', displayName: 'Użytkownicy', data: users },
    ]
      .filter(Boolean)
      .filter(({ data }) => data.length);
  }, [lists, sites, users]);

  if (!isAuthenticated) {
    return <LoginRequired text="Do przeglądania tablicy wymagane jest zalogowanie się" />;
  }

  if (!sections?.length) {
    return <Spinner />;
  }

  return (
    <SectionList
      sections={sections}
      contentContainerStyle={styles.list}
      keyExtractor={item => item.id}
      renderItem={({ item, section }) => {
        if (section.template === 'documentLibrary') {
          return <DocumentRow document={item} />;
        } else if (section.template === 'users') {
          return <UserRow user={item} />;
        } else if (section.template === 'sites') {
          return <SiteRow site={item} />;
        } else {
          return <ArticleRow article={item} />;
        }
      }}
      renderSectionHeader={({ section }) => (
        <View style={styles.title}>
          <Icon name={getSectionIcon(section.template)} />
          <Text style={styles.titleText}>{section.displayName}</Text>
        </View>
      )}
    />
  );
};

export default ListsScreen;
