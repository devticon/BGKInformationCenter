import { useEffect, useState } from 'react';
import { useAuthContext } from '../contexts';
import { getMany, watchMany } from '../gun';

export function useTeamsLists() {
  const [teams, setTeams] = useState<any[]>([]);
  const { userId } = useAuthContext();

  useEffect(() => {
    watchMany(`${userId}/teams`, async teams => {
      teams = teams.filter(Boolean);

      for (const team of teams) {
        if (team.channels && team.channels['#']) {
          team.channels = await getMany(team.channels['#']);
        } else {
          team.channels = [];
        }
        if (team.members && team.members['#']) {
          team.members = await getMany(team.members['#']);
        } else {
          team.members = [];
        }
      }

      setTeams(teams);
    });
  }, [userId]);

  return teams;
}
