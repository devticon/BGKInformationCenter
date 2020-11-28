import { useEffect, useState } from 'react';
import { getMany, watchMany } from '../gun';

export function useTeamsLists() {
  const [teams, setTeams] = useState<any[]>([]);

  useEffect(() => {
    watchMany('me/teams', async teams => {
      teams = teams.filter(Boolean);

      for (const team of teams) {
        if (team.channels && team.channels['#']) {
          team.channels = await getMany(team.channels['#']);
        } else {
          team.channels = [];
        }
        console.log(team.members);
        if (team.members && team.members['#']) {
          team.members = await getMany(team.members['#']);
        } else {
          team.members = [];
        }
      }

      setTeams(teams);
    });
  }, []);

  return teams;
}
