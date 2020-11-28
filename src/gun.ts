import AsyncStorage from '@react-native-async-storage/async-storage';
import Gun from 'gun/gun';
import 'gun/lib/radix.js';
import 'gun/lib/radisk.js';
import 'gun/lib/store.js';
import asyncStore from 'gun/lib/ras.js';

export const gun = Gun({ peers: ['https://devticon.loca.lt/gun'], store: asyncStore({ AsyncStorage }) });

export async function getOnce(path: string): Promise<any> {
  return new Promise(resolve => gun.get(path).once(data => resolve(data!)));
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
