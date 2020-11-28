import { useEffect, useState } from 'react';
import { getMany, getOnce } from '../gun';

export function useSharePointLists() {
  const [lists, setLists] = useState<any[]>([]);

  useEffect(() => {
    getMany('me/sharepoint/lists').then(async data => {
      for (const list of data) {
        if (list.items && list.items['#']) {
          list.items = await getMany(list.items['#']);
          for (const item of list.items) {
            if (item.fields && item.fields['#']) {
              item.fields = await getOnce(item.fields['#']);
            }
          }
        } else {
          list.items = [];
        }
      }
      setLists(data);
    });
  }, []);

  return lists;
}
