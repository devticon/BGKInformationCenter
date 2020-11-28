import { Button, Text } from '@components';
import { formatDateTime } from '@utils';
import React, { FC } from 'react';
import { Linking, View } from 'react-native';
import { styles } from './DocumentRow.styles';

type Document = {
  id: string;
  webUrl: string;
  fields: {
    LinkFilename: string;
    Modified: string;
  };
};

type Props = {
  document: Document;
};

const DocumentRow: FC<Props> = ({ document }) => {
  return (
    <View style={styles.row}>
      <View>
        <Text style={styles.name}>{document.fields.LinkFilename}</Text>
        <Text style={styles.modified}>Modyfikacja: {formatDateTime(document.fields.Modified)}</Text>
      </View>
      <Button size="small" text="Zobacz" onPress={() => Linking.openURL(document.webUrl)} />
    </View>
  );
};

export default DocumentRow;
