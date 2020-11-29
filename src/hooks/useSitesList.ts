import { useEffect, useState } from 'react';
import { useAuthContext } from '../contexts';
import { observeGunMany } from '../gun';
import { Site } from '../models';

export function useSitesLists() {
  const [sites, setSites] = useState<Site[]>([]);
  const { userId } = useAuthContext();

  useEffect(() => {
    if (userId) {
      const subscription = observeGunMany(`${userId}/sites`).subscribe(_sites => {
        setSites(_sites.filter(Boolean));
      });

      return () => subscription.unsubscribe();
    } else {
      setSites([]);
    }
  }, [userId]);

  return sites;
}
