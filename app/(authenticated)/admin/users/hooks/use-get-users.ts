import axios from "axios";
import { useState } from "react";

type User = {
  id: string;
  firstName: string;
  lastName: string;
  role: 'role' | 'admin'
}

export const useGetUsers = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState<User[]>([]);

  const fetchUsers = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get('/api/users');
      setUsers(response.data);
    } catch (error) {
      console.error('Failed to fetch users', error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    users,
    fetchUsers,
    isLoading
  }
}
