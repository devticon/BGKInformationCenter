import { useEffect, useState } from 'react';
import { useAuthContext } from '../contexts';
import { observeGunMany } from '../gun';
import { User } from '../models';

export function useUsersLists() {
  const [users, setUsers] = useState<User[]>([]);
  const { userId } = useAuthContext();

  useEffect(() => {
    if (userId) {
      const subscription = observeGunMany(`${userId}/users`).subscribe(_users => {
        setUsers(_users.filter(Boolean));
      });

      return () => subscription.unsubscribe();
    } else {
      setUsers([]);
    }
  }, [userId]);

  return users;
}
