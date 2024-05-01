import { useEffect } from 'react';
import { useAuth } from '../hooks/AuthProvider';

export default function Logout() {
  const {signout} = useAuth();

  useEffect(() => {
    signout();
  }, []);
  return null;
}
