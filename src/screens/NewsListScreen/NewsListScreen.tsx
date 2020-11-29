import { Spinner } from '@components';
import React, { FC } from 'react';
import { FlatList } from 'react-native';
import { useArticlesList } from '../../hooks/useArticlesList';
import ArticleRow from './ArticleRow/ArticleRow';
import { styles } from './NewsListScreen.styles';

const NewsListScreen: FC = () => {
  const articles = useArticlesList();

  if (!articles?.length) {
    return <Spinner />;
  }

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
