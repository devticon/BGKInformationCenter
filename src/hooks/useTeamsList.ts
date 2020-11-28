import { useEffect, useState } from 'react';
import { getMany } from '../gun';

export function useTeamsLists() {
  const [teams, setTeams] = useState<any[]>([]);

  useEffect(() => {
    getMany('me/teams').then(async teams => {
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
  }, []);

  return teams;
}
