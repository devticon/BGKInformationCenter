import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, FC, useCallback, useContext, useEffect, useState } from 'react';
import { authorize } from 'react-native-app-auth';
import { authConfig, authenticate } from '../auth';

type AuthContextValues = {
  isAuthenticated: boolean;
  isLoading: boolean;
  userId: string;
  username: string;
  login: () => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextValues>(null!);
export const useAuthContext = () => useContext(AuthContext);

export const AuthContextProvider: FC = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [userId, setUserId] = useState('');
  const [username, setUsername] = useState('');

  useEffect(() => {
    Promise.all([
      AsyncStorage.getItem('AuthorizeResult'),
      AsyncStorage.getItem('UserId'),
      AsyncStorage.getItem('Username'),
    ]).then(async ([authState, id, username]) => {
      if (authState && id && username) {
        await authenticate(JSON.parse(authState));
        setUserId(id || '');
        setUsername(username || '');
        setIsAuthenticated(!!id);
      }
    });
  }, []);

  const login = useCallback(async () => {
    try {
      setIsLoading(true);
      const authState = await authorize(authConfig);
      const response = await authenticate(authState);
      await AsyncStorage.setItem('AuthorizeResult', JSON.stringify(authState));
      await AsyncStorage.setItem('UserId', response.id);
      await AsyncStorage.setItem('Username', response.displayName);
      setUserId(response.id);
      setUsername(response.displayName);
      setIsAuthenticated(true);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const logout = useCallback(async () => {
    await AsyncStorage.clear();
    setUserId('');
    setUsername('');
    setIsAuthenticated(false);
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, isLoading, userId, username, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
