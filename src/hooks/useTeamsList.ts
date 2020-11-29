import { useEffect, useState } from 'react';
import { combineLatest, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { useAuthContext } from '../contexts';
import { getPaths, observeGun, observeGunMany } from '../gun';

export function useTeamsLists() {
  const [teams, setTeams] = useState<any[]>([]);
  const { userId } = useAuthContext();

  useEffect(() => {
    if (userId) {
      const subscription = observeGun(`${userId}/teams`)
        .pipe(
          switchMap(_teams => {
            const teamPaths = getPaths(_teams);
            return combineLatest(
              teamPaths.map(path =>
                observeGun(path).pipe(
                  switchMap(team => {
                    if (team.channels && team.channels['#']) {
                      return observeGunMany(team.channels['#']).pipe(map(channels => ({ ...team, channels })));
                    } else {
                      return of(team);
                    }
                  }),
                ),
              ),
            );
          }),
        )
        .subscribe(data => setTeams(data));

      return () => subscription.unsubscribe();
    } else {
      setTeams([]);
    }
  }, [userId]);

  return teams;
}
