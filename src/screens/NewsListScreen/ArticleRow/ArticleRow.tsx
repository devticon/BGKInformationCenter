import { Text } from '@components';
import { formatDate } from '@utils';
import React, { FC } from 'react';
import { Image, Linking, Pressable, View } from 'react-native';
import { Article } from '../../../models';
import { styles } from './ArticleRow.styles';

type Props = {
  article: Article;
};

const ArticleRow: FC<Props> = ({ article }) => {
  return (
    <Pressable style={styles.row} onPress={() => Linking.openURL(article.link)}>
      <View style={styles.left}>
        <Text style={styles.title} numberOfLines={3}>
          {article.title}
        </Text>
        <Text style={styles.footer}>{formatDate(article.date)} / Aktualności</Text>
      </View>
      <View style={styles.right}>
        <Image style={styles.image} source={{ uri: article.image }} />
      </View>
    </Pressable>
  );
};

export default ArticleRow;
