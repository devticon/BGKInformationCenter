import { Icon, Spinner, Text } from '@components';
import React, { FC } from 'react';
import { SafeAreaView, SectionList, View } from 'react-native';
import { useSharePointLists } from '../../hooks/useSharePointLists';
import ArticleRow from '../ArticleRow/ArticleRow';
import { articles } from '../mock';
import { styles } from './ListsScreen.styles';

const ListsScreen: FC = () => {
  const lists = useSharePointLists();

  if (!lists?.length) {
    return <Spinner />;
  }

  const xds = lists.map(list => ({ ...list, data: articles || list.items || [] }));

  return (
    <SafeAreaView>
      <SectionList
        sections={xds}
        contentContainerStyle={styles.list}
        keyExtractor={(item, index) => item.id + index}
        renderItem={({ item, index, section }) => {
          // console.log(item);
          return <ArticleRow article={item} />;
        }}
        ListEmptyComponent={<Text>Brak danych.</Text>}
        renderSectionHeader={({ section }) => {
          console.log(section.template);
          return (
            <View style={styles.title}>
              <Icon name="calendar-outline" />
              <Text style={styles.titleText}>{section.displayName}</Text>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default ListsScreen;
