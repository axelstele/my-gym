import axios from "axios";
import { useState } from "react";

export const useDeletePlan = () => {
  const [isLoading, setIsLoading] = useState(false);

  const deletePlan = async (id: string) => {
    setIsLoading(true);
    try {
      await axios.delete(`/api/plans/${id}`);
    } catch (error) {
      console.error('Failed to delete plan', error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    deletePlan,
    isLoading
  }
}
