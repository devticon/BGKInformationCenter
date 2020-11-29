import { Icon, LoginRequired, Spinner, Text } from '@components';
import React, { FC, useMemo } from 'react';
import { SectionList, View } from 'react-native';
import { useSharePointLists } from '@hooks';
import { useSitesLists } from '@hooks';
import { useUsersLists } from '@hooks';
import { useAuthContext } from '../../contexts';
import { Event } from '../../models';
import ArticleRow from '../NewsListScreen/ArticleRow/ArticleRow';
import DocumentRow from './DocumentRow/DocumentRow';
import EventRow from './EventRow/EventRow';
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

const events: Event[] = [
  {
    id: '1x',
    title: 'Spotkanie zarządu',
    start: '2020-12-07T14:00:00.000Z',
    end: '2020-12-07T17:00:00.000Z',
    location: 'Łódź',
  },
  {
    id: 'x2',
    title: 'Spotkanie integracyjne',
    start: '2020-12-09T14:00:00.000Z',
    end: '2020-12-09T17:00:00.000Z',
    location: 'Kraków',
  },
  {
    id: '3x',
    title: 'Spotkanie zarządu',
    start: '2020-12-17T09:00:00.000Z',
    end: '2020-12-17T11:00:00.000Z',
    location: 'Warszawa',
  },
];

const ListsScreen: FC = () => {
  const { isAuthenticated } = useAuthContext();
  const lists = useSharePointLists();
  const users = useUsersLists();
  const sites = useSitesLists();

  const sections = useMemo(() => {
    return [
      ...lists.map(list => ({ ...list, data: list.items })),
      { template: 'events', displayName: 'Wydarzenia', data: events },
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
        } else if (section.template === 'events') {
          return <EventRow event={item} />;
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
