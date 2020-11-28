import { Button, Text } from '@components';
import { formatDateTime } from '@utils';
import React, { FC } from 'react';
import { Linking, View } from 'react-native';
import { styles } from './DocumentRow.styles';

type Document = {
  id: string;
  modified: string;
  filename: string;
  link: string;
};

type Props = {
  document: Document;
};

const DocumentRow: FC<Props> = ({ document }) => {
  return (
    <View style={styles.row}>
      <View>
        <Text style={styles.name}>{document.filename}</Text>
        <Text style={styles.modified}>Modyfikacja: {formatDateTime(document.modified)}</Text>
      </View>
      <Button size="small" text="Zobacz" onPress={() => Linking.openURL(document.link)} />
    </View>
  );
};

export default DocumentRow;
