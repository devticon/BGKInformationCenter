import { Icon, Spinner, Text } from '@components';
import React, { FC, useMemo } from 'react';
import { SectionList, View } from 'react-native';
import { useSharePointLists } from '../../hooks/useSharePointLists';
import { useUsersLists } from '../../hooks/useUsersList';
import ArticleRow from '../NewsListScreen/ArticleRow/ArticleRow';
import DocumentRow from './DocumentRow/DocumentRow';
import { styles } from './ListsScreen.styles';
import UserRow from './UserRow/UserRow';

const getSectionIcon = (template: string): string => {
  switch (template) {
    case 'events':
      return 'calendar-outline';
    case 'documentLibrary':
      return 'documents-outline';
    case 'users':
      return 'people-outline';
    default:
      return 'apps-outline';
  }
};

const ListsScreen: FC = () => {
  const lists = useSharePointLists();
  const users = useUsersLists();

  const sections = useMemo(() => {
    return [
      ...lists.map(list => ({ ...list, data: list.items })),
      { template: 'users', displayName: 'Użytkownicy', data: users },
    ];
  }, [lists, users]);

  if (!lists?.length) {
    return <Spinner />;
  }

  return (
    <SectionList
      sections={sections}
      contentContainerStyle={styles.list}
      keyExtractor={item => item.id}
      renderItem={({ item, section }) => {
        if (section.template === 'documentLibrary') {
          return (
            <DocumentRow
              document={{
                id: item.id,
                link: item.webUrl,
                filename: item.fields.LinkFilename,
                modified: item.fields.Modified,
              }}
            />
          );
        } else if (section.template === 'users') {
          return <UserRow user={item} />;
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
