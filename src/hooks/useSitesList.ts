import { useEffect, useState } from 'react';
import { watchMany } from '../gun';
import { Site } from '../models';

export function useSitesLists() {
  const [sites, setSites] = useState<Site[]>([]);

  useEffect(() => {
    watchMany('me/sites', _sites => {
      setSites(_sites.filter(Boolean));
    });
  }, []);

  return sites;
}
