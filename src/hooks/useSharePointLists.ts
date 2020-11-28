import { useEffect, useState } from 'react';
import { useAuthContext } from '../contexts';
import { getMany, getOnce, watchMany } from '../gun';

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
                item.fields = await getOnce(item.fields['#']);
              }
            }
          } else {
            list.items = [];
          }
        }

        setLists(lists);
      });
    }
  }, [userId]);

  return lists;
}
