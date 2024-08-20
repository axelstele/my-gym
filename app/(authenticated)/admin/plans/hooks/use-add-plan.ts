import axios from 'axios';
import { useState } from 'react';

export const useAddPlan = () => {
  const [isLoading, setIsLoading] = useState(false);

  const addPlan = async (plan: { name: string, price: number, type: string }) => {
    setIsLoading(true);
    try {
      await axios.post('/api/plans', plan);
    }
    catch (error) {
      console.error('Failed to add plan', error);
    }
    finally {
      setIsLoading(false);
    }
  };

  return { isLoading, addPlan };
};