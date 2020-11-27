import { Text } from '@components';
import React, { FC } from 'react';
import { FlatList } from 'react-native';
import ArticleRow from './ArticleRow/ArticleRow';
import { articles } from './mock';

const ArticlesList: FC = () => {
  return (
    <FlatList
      data={articles}
      initialNumToRender={30}
      keyExtractor={item => item.id.toString()}
      keyboardShouldPersistTaps="handled"
      onEndReached={console.log}
      onEndReachedThreshold={0.8}
      ListEmptyComponent={<Text style={{ textAlign: 'center' }}>Brak artykułów.</Text>}
      renderItem={({ item }) => <ArticleRow article={item} />}
    />
  );
};

export default ArticlesList;
