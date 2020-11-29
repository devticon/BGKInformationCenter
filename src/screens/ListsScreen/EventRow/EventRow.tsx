import { Text } from '@components';
import { formatDateTimeShort } from '@utils';
import React, { FC } from 'react';
import { View } from 'react-native';
import { Event } from '../../../models';
import { styles } from './EventRow.styles';

type Props = {
  event: Event;
};

const EventRow: FC<Props> = ({ event }) => {
  return (
    <View style={styles.row}>
      <Text style={styles.name}>{event.title}</Text>
      <Text style={styles.modified}>
        {event.location}, {formatDateTimeShort(event.start)} - {formatDateTimeShort(event.end)}
      </Text>
    </View>
  );
};

export default EventRow;
