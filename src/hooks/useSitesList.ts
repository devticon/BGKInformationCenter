import { useEffect, useState } from 'react';
import { useAuthContext } from '../contexts';
import { watchMany } from '../gun';
import { Site } from '../models';

export function useSitesLists() {
  const [sites, setSites] = useState<Site[]>([]);
  const { userId } = useAuthContext();

  useEffect(() => {
    if (userId) {
      watchMany(`${userId}/sites`, _sites => {
        setSites(_sites.filter(Boolean));
      });
    }
  }, [userId]);

  return sites;
}
