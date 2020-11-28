import { useEffect, useState } from 'react';
import { getMany, watchMany } from '../gun';

export function useSharePointLists() {
  const [lists, setLists] = useState<any[]>([]);

  useEffect(() => {
    watchMany('me/sharepoint/lists', async data => {
      for (const list of data) {
        if (list.items) {
          list.items = await getMany(list.items['#']);
        }
      }

      setLists(data);
    });
  }, []);

  return lists;
}
