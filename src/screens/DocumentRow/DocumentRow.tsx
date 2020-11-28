import { Text } from '@components';
import React, { FC } from 'react';
import { View } from 'react-native';
import { styles } from './DocumentRow.styles';

type Document = {
  id: string;
  webUrl: string;
};

type Props = {
  document: Document;
};

const DocumentRow: FC<Props> = ({ document }) => {
  return (
    <View style={styles.row}>
      <Text>Dokument {document.webUrl}</Text>
    </View>
  );
};

export default DocumentRow;
