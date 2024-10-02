import axios from "axios";
import { useState } from "react";

export const useDeleteUser = () => {
  const [isLoading, setIsLoading] = useState(false);

  const deleteUser = async (id: string) => {
    setIsLoading(true);
    try {
      await axios.delete(`/api/users/${id}`);
    } catch (error) {
      console.error('Failed to delete user', error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    deleteUser,
    isLoading
  }
}
