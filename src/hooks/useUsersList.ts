import { useEffect, useState } from 'react';
import { useAuthContext } from '../contexts';
import { watchMany } from '../gun';
import { User } from '../models';

export function useUsersLists() {
  const [users, setUsers] = useState<User[]>([]);
  const { userId } = useAuthContext();

  useEffect(() => {
    if (userId) {
      watchMany(`${userId}/users`, _users => {
        setUsers(_users.filter(Boolean));
      });
    } else {
      setUsers([]);
    }
  }, [userId]);

  return users;
}
