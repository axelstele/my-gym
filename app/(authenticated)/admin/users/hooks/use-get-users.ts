import { useAuth } from "@/app/providers/auth-provider";
import axios from "axios";
import { useState } from "react";

type User = {
  id: string;
  name: string;
  email: string;
  role: 'role' | 'admin'
}

type Params = {
  role: string;
}

export const useGetUsers = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState<User[]>([]);
  const auth = useAuth();

  const role = auth.user?.role === 'superadmin' ? 'admin' : 'basic';

  const fetchUsers = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`/api/users?role=${role}`);
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
