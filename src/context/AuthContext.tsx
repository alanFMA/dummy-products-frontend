'use client';

import { ReactNode, createContext, useContext, useEffect, useState } from 'react';

type LoginFn = (email: string, password: string) => void;

interface AuthContextData {
  isAuthenticated: boolean;
  user: string | null;
  login: LoginFn;
  logout: () => void;
}

const AuthContext = createContext<AuthContextData | undefined>(undefined);

const STORAGE_KEY = 'auth-token';

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem(STORAGE_KEY);
    if (token) {
      setUser('usuario@exemplo.com');
    }
  }, []);

  function login(emailInput: string, passwordInput: string) {
    const email = emailInput;
    const password = passwordInput;

    if (email && password) {
      localStorage.setItem(STORAGE_KEY, 'fake-token');
      setUser(email);
    }
  }

  function logout() {
    localStorage.removeItem(STORAGE_KEY);
    setUser(null);
  }

  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de AuthProvider!');
  }
  return context;
}
