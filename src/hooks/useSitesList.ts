import { useEffect, useState } from 'react';
import { watchMany } from '../gun';

export function useSitesLists() {
  const [sites, setSites] = useState<any[]>([]);

  useEffect(() => {
    watchMany('me/sites', async sites => {
      sites = sites.filter(Boolean);
      setSites(sites);
    });
  }, []);

  return sites;
}
