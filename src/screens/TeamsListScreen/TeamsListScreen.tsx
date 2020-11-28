import { Spinner, Text } from '@components';
import React, { FC } from 'react';
import { Pressable, SectionList } from 'react-native';
import { useTeamsLists } from '../../hooks/useTeamsList';
import { styles } from './TeamsListScreen.styles';

const TeamsListScreen: FC = () => {
  const teams = useTeamsLists();
  const sections = teams.map(team => ({ ...team, data: [...team.channels, ...team.members] }));

  if (!teams?.length) {
    return <Spinner />;
  }

  return (
    <SectionList
      sections={sections}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <Pressable>
          <Text style={styles.channelName}># {item.displayName}</Text>
        </Pressable>
      )}
      renderSectionHeader={({ section }) => <Text style={styles.teamName}>{section.displayName}</Text>}
    />
  );
};

export default TeamsListScreen;
