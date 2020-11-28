import React, { createContext, FC, useCallback, useContext, useEffect, useState } from 'react';
import { authorize } from 'react-native-app-auth';
import { authConfig, authenticate } from '../auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

type AuthContextValues = {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextValues>(null!);
export const useAuthContext = () => useContext(AuthContext);

export const AuthContextProvider: FC = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem('UserId').then(id => {
      setIsAuthenticated(!!id);
    });
  }, []);

  const login = useCallback(async () => {
    try {
      const authState = await authorize(authConfig);
      const response = await authenticate(authState);
      await AsyncStorage.setItem('AuthorizeResult', JSON.stringify(authState));
      await AsyncStorage.setItem('UserId', response.id);
      setIsAuthenticated(true);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const logout = useCallback(async () => {
    await AsyncStorage.setItem('AuthorizeResult', '');
    await AsyncStorage.setItem('UserId', '');
    setIsAuthenticated(false);
  }, []);

  return <AuthContext.Provider value={{ isAuthenticated, login, logout }}>{children}</AuthContext.Provider>;
};
