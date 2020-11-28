import React, { createContext, FC, useCallback, useContext, useEffect, useState } from 'react';
import { authorize } from 'react-native-app-auth';
import { authConfig, authenticate } from '../auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

type AuthContextValues = {
  isAuthenticated: boolean;
  isLoading: boolean;
  userId: string;
  login: () => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextValues>(null!);
export const useAuthContext = () => useContext(AuthContext);

export const AuthContextProvider: FC = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [userId, setUserId] = useState('');

  useEffect(() => {
    AsyncStorage.getItem('UserId').then(id => {
      setUserId(id || '');
      setIsAuthenticated(!!id);
    });
  }, []);

  const login = useCallback(async () => {
    try {
      setIsLoading(true);
      const authState = await authorize(authConfig);
      const response = await authenticate(authState);
      await AsyncStorage.setItem('AuthorizeResult', JSON.stringify(authState));
      await AsyncStorage.setItem('UserId', response.id);
      setUserId(response.id);
      setIsAuthenticated(true);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const logout = useCallback(async () => {
    await AsyncStorage.setItem('AuthorizeResult', '');
    await AsyncStorage.setItem('UserId', '');
    setUserId('');
    setIsAuthenticated(false);
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, isLoading, userId, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
