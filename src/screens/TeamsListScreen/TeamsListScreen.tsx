import { LoginRequired, Spinner, Text } from '@components';
import { useTeamsLists } from '@hooks';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import React, { FC } from 'react';
import { Pressable, SectionList } from 'react-native';
import { useAuthContext } from '../../contexts';
import { Routes, TabParamList } from '../../navigation/routes';
import { styles } from './TeamsListScreen.styles';

const TeamsListScreen: FC = () => {
  const { isAuthenticated } = useAuthContext();
  const { navigate } = useNavigation<BottomTabNavigationProp<TabParamList, Routes.TeamsList>>();
  const teams = useTeamsLists();
  const sections = teams.map(team => ({ ...team, data: team.channels }));

  if (!isAuthenticated) {
    return <LoginRequired text="Do korzystania z chatu wymagane jest zalogowanie się" />;
  }

  if (!teams?.length) {
    return <Spinner />;
  }

  return (
    <SectionList
      sections={sections}
      keyExtractor={item => item.id}
      renderItem={({ item, section }) => (
        <Pressable onPress={() => navigate(Routes.Chat, { teamId: section.id, channelId: item.id })}>
          <Text style={styles.channelName}># {item.displayName}</Text>
        </Pressable>
      )}
      renderSectionHeader={({ section }) => <Text style={styles.teamName}>{section.displayName}</Text>}
    />
  );
};

export default TeamsListScreen;
