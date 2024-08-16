"use client"

import React, { useEffect } from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import { useGetPlans } from './hooks/use-get-plans';

export default function PlansPage() {
  const { plans, fetchPlans } = useGetPlans();

  useEffect(() => {
    fetchPlans()
  }, []);

  return (
    <Grid container spacing={3}>
      {plans.map((plan) => (
        <Grid item xs={12} sm={6} md={4} key={plan.id}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                {plan.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {plan.price}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
