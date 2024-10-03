import axios from 'axios';
import { useState } from 'react';

export const useAddUser = () => {
  const [isLoading, setIsLoading] = useState(false);

  const addUser = async (user: { firstName: string, lastName: string, email: string, role: string }) => {
    setIsLoading(true);
    try {
      await axios.post('/api/users', {
        ...user,
        role: user.role || 'basic'
      });
    }
    catch (error) {
      console.error('Failed to add user', error);
    }
    finally {
      setIsLoading(false);
    }
  };

  return { isLoading, addUser };
};