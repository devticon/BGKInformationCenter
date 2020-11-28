import { Button, Text } from '@components';
import { formatDateTime } from '@utils';
import React, { FC } from 'react';
import { Linking, View } from 'react-native';
import { styles } from './SiteRow.styles';

type Site = {
  id: string;
  displayName: string;
  webUrl: string;
  lastModifiedDateTime: string;
};

type Props = {
  site: Site;
};

const SiteRow: FC<Props> = ({ site }) => {
  return (
    <View style={styles.row}>
      <View>
        <Text style={styles.name}>{site.displayName}</Text>
        <Text style={styles.modified}>Modyfikacja: {formatDateTime(site.lastModifiedDateTime)}</Text>
      </View>
      <Button size="small" text="Zobacz" onPress={() => Linking.openURL(site.webUrl)} />
    </View>
  );
};

export default SiteRow;
