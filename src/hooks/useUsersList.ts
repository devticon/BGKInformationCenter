import { useEffect, useState } from 'react';
import { watchMany } from '../gun';
import { User } from '../models';

export function useUsersLists() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    watchMany('users', _users => {
      setUsers(_users.filter(Boolean));
    });
  }, []);

  return users;
}
