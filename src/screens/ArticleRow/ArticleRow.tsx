import { Text } from '@components';
import { formatDate } from '@utils';
import React, { FC } from 'react';
import { Image, View } from 'react-native';
import { styles } from './ArticleRow.styles';

type Article = {
  id: string;
  title: string;
  date: string;
  image: string;
  link: string;
};

type Props = {
  article: Article;
};

const ArticleRow: FC<Props> = ({ article }) => {
  return (
    <View style={styles.row}>
      <View style={styles.left}>
        <Text style={styles.title} numberOfLines={3}>
          {article.title}
        </Text>
        <Text style={styles.footer}>{formatDate(article.date)} / Aktualności</Text>
      </View>
      <View style={styles.right}>
        <Image style={styles.image} source={{ uri: article.image }} />
      </View>
    </View>
  );
};

export default ArticleRow;
