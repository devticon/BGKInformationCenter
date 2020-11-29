import { useEffect, useState } from 'react';
import { combineLatest, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { useAuthContext } from '../contexts';
import { getMany, getPaths, observeGun, observeGunMany, promiseGun, watchMany } from '../gun';

export function useSharePointLists() {
  const [lists, setLists] = useState<any[]>([]);
  const { userId } = useAuthContext();

  useEffect(() => {
    if (userId) {
      watchMany(`${userId}/sharepoint/lists`, async lists => {
        lists = lists.filter(Boolean);

        for (const list of lists) {
          if (list.items && list.items['#']) {
            list.items = await getMany(list.items['#']);
            list.items = list.items.filter(Boolean);

            for (const item of list.items) {
              if (item.fields && item.fields['#']) {
                item.fields = await promiseGun(item.fields['#']);
              }
            }
          } else {
            list.items = [];
          }
        }

        setLists(lists);
      });
    } else {
      setLists([]);
    }
  }, [userId]);

  return lists;
}
