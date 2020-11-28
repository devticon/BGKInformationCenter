import AsyncStorage from '@react-native-async-storage/async-storage';
import Gun from 'gun/gun';
import 'gun/lib/radix.js';
import 'gun/lib/radisk.js';
import 'gun/lib/store.js';
import asyncStore from 'gun/lib/ras.js';

export const gun = Gun({ peers: ['https://devticon.loca.lt/gun'], store: asyncStore({ AsyncStorage }) });
