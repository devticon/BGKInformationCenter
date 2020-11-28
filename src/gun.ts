import { API_URL } from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Gun from 'gun/gun';
import 'gun/lib/radix.js';
import 'gun/lib/radisk.js';
import 'gun/lib/store.js';
import asyncStore from 'gun/lib/ras.js';

export const gun = Gun({
  peers: [`${API_URL}/gun`],
  store: asyncStore({ AsyncStorage }),
});

export async function getOnce(path: string): Promise<any> {
  return new Promise(resolve =>
    gun.get(path).once(data => {
      resolve(data!);
    }),
  );
}

export async function getMany(path: string): Promise<any[]> {
  const list = await getOnce(path);

  if (!list) {
    return [];
  }

  return Promise.all(
    Object.keys(list)
      .filter(key => key !== '_')
      .map(key => getOnce(list[key]['#'])),
  );
}

export function watchMany(path: string, callback: (data: any[]) => void) {
  gun.get(path).on(list => {
    if (!list) {
      callback([]);
    }
    Promise.all(
      Object.keys(list)
        .filter(key => key !== '_')
        .map(key => {
          return getOnce(list[key]['#']);
        }),
    ).then(callback);
  });
}
