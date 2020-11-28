import { useEffect, useState } from 'react';
import { getMany } from '../gun';

export function useSharePointLists() {
  const [lists, setLists] = useState<any[]>([]);

  useEffect(() => {
    getMany('me/sharepoint/lists').then(async data => {
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
