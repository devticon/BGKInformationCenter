import { Text } from '@components';
import { flexAlignCenter, flexRow, margin } from '@theme';
import { formatDate } from '@utils';
import React, { FC, useRef } from 'react';
import { Image, Linking, Pressable, View } from 'react-native';
import { Article } from '../../../models';
import { styles } from './ArticleRow.styles';
import { images } from './images';

type Props = {
  article: Article;
};

const ArticleRow: FC<Props> = ({ article }) => {
  const imageUrlRef = useRef(images[Math.floor(Math.random() * images.length)]);

  return (
    <Pressable style={styles.row} onPress={() => Linking.openURL(article.link)}>
      <View style={styles.left}>
        <Text style={styles.title} numberOfLines={3}>
          {article.title}
        </Text>
        <View style={[flexRow, flexAlignCenter, margin.small.top]}>
          {!!article.channel_icon && <Image style={styles.favicon} source={{ uri: article.channel_icon }} />}
          <Text style={styles.footer}>
            {formatDate(article.isoDate)} / {article.channel_name}
          </Text>
        </View>
      </View>
      <View style={styles.right}>
        <Image style={styles.image} source={{ uri: imageUrlRef.current }} />
      </View>
    </Pressable>
  );
};

export default ArticleRow;
