import axios from "axios";
import { useState } from "react";

type Plan = {
  id: string;
  name: string;
  price: number;
}

export const useGetPlans = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [plans, setPlans] = useState<Plan[]>([]);

  const fetchPlans = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get('/api/plans');
      setPlans(response.data);
    } catch (error) {
      console.error('Failed to fetch plans', error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    plans,
    fetchPlans,
    isLoading
  }
}
