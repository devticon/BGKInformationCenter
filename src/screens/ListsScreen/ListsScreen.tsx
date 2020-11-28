import { Icon, Spinner, Text } from '@components';
import React, { FC } from 'react';
import { SafeAreaView, SectionList, View } from 'react-native';
import { useSharePointLists } from '../../hooks/useSharePointLists';
import ArticleRow from '../ArticleRow/ArticleRow';
import DocumentRow from '../DocumentRow/DocumentRow';
import { articles } from '../mock';
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

  if (!lists?.length) {
    return <Spinner />;
  }

  const xds = lists.map(list => ({ ...list, data: list.items || articles }));

  return (
    <SafeAreaView>
      <SectionList
        sections={xds}
        contentContainerStyle={styles.list}
        keyExtractor={(item, index) => item.id + index}
        renderItem={({ item, section }) => {
          if (section.template === 'documentLibrary') {
            return <DocumentRow document={item} />;
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
    </SafeAreaView>
  );
};

export default ListsScreen;