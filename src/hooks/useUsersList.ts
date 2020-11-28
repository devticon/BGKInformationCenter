import { useEffect, useState } from 'react';
import { watchMany } from '../gun';

export function useUsersLists() {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    watchMany('users', async users => {
      users = users.filter(Boolean);
      setUsers(users);
    });
  }, []);

  return users;
}
