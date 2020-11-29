import { useEffect, useState } from 'react';
import { combineLatest, of } from 'rxjs';
import { debounceTime, map, switchMap } from 'rxjs/operators';
import { useAuthContext } from '../contexts';
import { getPaths, observeGun, observeGunMany } from '../gun';

export function useSharePointLists() {
  const [lists, setLists] = useState<any[]>([]);
  const { userId } = useAuthContext();

  useEffect(() => {
    if (userId) {
      const subscription = observeGun(`${userId}/sharepoint/lists`)
        .pipe(
          switchMap(_lists => {
            const listPaths = getPaths(_lists);
            return combineLatest(
              listPaths.map(path =>
                observeGun(path).pipe(
                  switchMap(list => {
                    if (list.items && list.items['#']) {
                      return observeGunMany(list.items['#']).pipe(
                        map(items => {
                          return { ...list, items: items.filter(Boolean) };
                        }),
                      );
                    } else {
                      return of({ ...list, items: [] });
                    }
                  }),
                ),
              ),
            );
          }),
          debounceTime(500),
        )
        .subscribe(data => setLists(data));

      return () => subscription.unsubscribe();
    } else {
      setLists([]);
    }
  }, [userId]);

  return lists;
}
