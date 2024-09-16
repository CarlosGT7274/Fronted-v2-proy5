// src/context/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import useToken from '../hooks/useToken';
import { loginUser, logoutUser, getCurrentUser } from '../api/api';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const { token, saveToken, removeToken } = useToken();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initAuth = async () => {
      try {
        if (token) {
          const currentUser = await getCurrentUser();
          setUser(currentUser);
        }
      } catch (error) {
        console.error('Error initializing auth:', error);
      } finally {
        setLoading(false);
      }
    };
    initAuth();
  }, [token]);

  const login = async (username, password) => {
    try {
      const userData = await loginUser(username, password);
      saveToken(userData); // Guarda el token usando el hook
      setUser(userData);
      return true;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  };

  const logout = async () => {
    try {
      await logoutUser();
      setUser(null);
      removeToken(); // Elimina el token usando el hook
    } catch (error) {
      console.error('Logout error:', error);
    }
  };
  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

