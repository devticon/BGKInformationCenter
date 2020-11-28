import React, { FC } from 'react';
import { FlatList } from 'react-native';
import ArticleRow from './ArticleRow/ArticleRow';
import { articles } from '../mock';
import { styles } from './NewsListScreen.styles';

const NewsListScreen: FC = () => {
  return (
    <FlatList
      data={articles}
      contentContainerStyle={styles.list}
      keyExtractor={item => item.id}
      renderItem={({ item }) => <ArticleRow article={item} />}
    />
  );
};

export default NewsListScreen;
