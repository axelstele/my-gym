import axios from 'axios';
import { useState } from 'react';

export const useEditUser = () => {
  const [isLoading, setIsLoading] = useState(false);

  const editUser = async (id: string, userData: { firstName: string, lastName: string, email: string, role: string }) => {
    setIsLoading(true);
    try {
      await axios.put(`/api/users/${id}`, userData);
    }
    catch (error) {
      console.error('Failed to edit user', error);
    }
    finally {
      setIsLoading(false);
    }
  };

  return { isLoading, editUser };
};