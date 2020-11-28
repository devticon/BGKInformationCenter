import { Spinner, Text } from '@components';
import React, { FC } from 'react';
import { SectionList, View } from 'react-native';
import { useTeamsLists } from '../../hooks/useTeamsList';
import { styles } from '../ListsScreen/ListsScreen.styles';

const TeamsListScreen: FC = () => {
  const teams = useTeamsLists();
  const sections = teams.map(team => ({ ...team, data: [...team.channels, ...team.members] }));

  if (!teams?.length) {
    return <Spinner />;
  }

  return (
    <SectionList
      sections={sections}
      contentContainerStyle={styles.list}
      keyExtractor={(item, index) => item.id + index}
      renderItem={({ item, section }) => {
        return <Text>{item.displayName || 'xd'}</Text>;
      }}
      renderSectionHeader={({ section }) => {
        return (
          <View style={styles.title}>
            {/*<Icon name={getSectionIcon(section.template)} />*/}
            <Text style={styles.titleText}>{section.displayName}</Text>
          </View>
        );
      }}
    />
  );
};

export default TeamsListScreen;
