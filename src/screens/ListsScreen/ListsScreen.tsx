import { Icon, Spinner, Text } from '@components';
import React, { FC } from 'react';
import { SectionList, View } from 'react-native';
import { useSharePointLists } from '../../hooks/useSharePointLists';
import { articles } from '../mock';
import ArticleRow from './ArticleRow/ArticleRow';
import DocumentRow from './DocumentRow/DocumentRow';
import { styles } from './ListsScreen.styles';

const getSectionIcon = (template: string): string => {
  switch (template) {
    case 'events':
      return 'calendar-outline';
    case 'documentLibrary':
      return 'documents-outline';
    default:
      return 'apps-outline';
  }
};

const ListsScreen: FC = () => {
  const lists = useSharePointLists();
  const sections = lists.map(list => ({ ...list, data: list.items.length ? list.items : articles }));

  if (!lists?.length) {
    return <Spinner />;
  }

  return (
    <SectionList
      sections={sections}
      contentContainerStyle={styles.list}
      keyExtractor={(item, index) => item.id + index}
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
        } else {
          return <ArticleRow article={item} />;
        }
      }}
      renderSectionHeader={({ section }) => {
        return (
          <View style={styles.title}>
            <Icon name={getSectionIcon(section.template)} />
            <Text style={styles.titleText}>{section.displayName}</Text>
          </View>
        );
      }}
    />
  );
};

export default ListsScreen;
