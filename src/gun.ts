import { API_URL } from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Gun from 'gun/gun';
import 'gun/lib/radix.js';
import 'gun/lib/radisk.js';
import 'gun/lib/store.js';
import asyncStore from 'gun/lib/ras.js';
import { combineLatest, Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

export const gun = Gun({
  peers: [`${API_URL}/gun`],
  store: asyncStore({ AsyncStorage }),
});

export function getPaths(list: any): string[] {
  return Object.keys(list)
    .filter(key => key !== '_' && key !== '#')
    .map(key => list?.[key]?.['#'])
    .filter(Boolean);
}

export async function promiseGun(path: string): Promise<any> {
  return new Promise(resolve => {
    gun.get(path).once(data => {
      // console.log('once', path);
      resolve(data!);
    });
  });
}

export function observeGun(path: string): Observable<any> {
  return new Observable(subscriber => {
    // console.log('on  ', path);
    const selector = gun.get(path);

    selector.on(data => {
      // console.log('data', path);
      subscriber.next(data);
    });

    return () => {
      // console.log('xon ', path);
      selector.off();
    };
  });
}

export function observeGunMany(path: string, observeLeaves = true): Observable<any[]> {
  return observeGun(path).pipe(
    switchMap(list => {
      if (!list) {
        return of([]);
      }

      const paths = getPaths(list);
      return combineLatest(paths.map(_path => (observeLeaves ? observeGun(_path) : promiseGun(_path))));
    }),
  );
}
